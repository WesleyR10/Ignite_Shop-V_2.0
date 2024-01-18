import * as Dialog from '@radix-ui/react-dialog'
import { AppProps } from "next/app"
import Image from "next/image"
import Link from 'next/link'
import { Handbag } from "phosphor-react"

import { ProductsProvider } from '@/contexts/ProductsCartContext'

import logoImg from "../assets/logo.svg"
import { ShoppingCartModal } from '../components/Shopping'
import { globalStyles } from "../styles/global"
import { Container, Header, ShoppingCartButton } from "../styles/pages/app"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <ProductsProvider>

        <Header>
          <Link href="/">
            <Image src={logoImg} width={130} height={52} alt="" />
          </Link>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <ShoppingCartButton> <Handbag size={24} /> <span>1</span> </ShoppingCartButton>
            </Dialog.Trigger>

            <ShoppingCartModal />

          </Dialog.Root>
        </Header>

        <Component {...pageProps} />
      </ProductsProvider>

    </Container >
  )
}