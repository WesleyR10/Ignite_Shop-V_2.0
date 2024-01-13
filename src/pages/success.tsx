import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

import { stripe } from "../lib/stripe";
import { ImageContainer, ImageProduct, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  costumerName: string;
  quantity: number;
  product: {
    images: string;
    id: string;
  }[]
}

export default function Success({ costumerName, product, quantity }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <ImageContainer >
          {product.map((product) => (
            <ImageProduct key={product.id}  >
              <Image src={product.images[0]} width={120} height={110} alt="" />
            </ImageProduct>
          ))}
        </ImageContainer>
        <p>
          Uhuul <strong>{costumerName}</strong>, sua compra de <strong>{quantity}</strong> camisetas já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const costumerName = session.customer_details?.name;
  const quantity = session.line_items?.data.length;
  const product = session.line_items?.data.map((item) => {
    return item.price?.product as Stripe.Product;
  })

  return {
    props: {
      costumerName,
      quantity,
      product
    }
  }
}