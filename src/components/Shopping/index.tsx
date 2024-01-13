import axios from "axios";
import Image from "next/image";
import { X } from 'phosphor-react'
import { useContext, useState } from "react";

import { ProductsContext } from "@/contexts/ProductsCartContext";
import { CloseButton, Content, DetailsConference, ImageContainer, ProductDetails, PurchaseDetails, Title } from '@/styles/modal/shopping'

export function ShoppingCartModal() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
  const { cart } = useContext(ProductsContext);

  console.log(cart)
  async function handleBuyButton() {
    try {
      const productIds = cart.map((product) => product.defaultPriceId);

      const response = await axios.post('/api/checkout', {
        priceIds: productIds,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  const calculateTotal = (): number => {
    return cart.reduce((total, product) => {
      return total + parseFloat(product.price.replace('R$', '').replace(',', '.'));
    }, 0);
  };

  return (
    <Content>
      <CloseButton>
        <X size={24} />
      </CloseButton>

      <Title>Sacola de compras </Title>

      {cart.map((product) => (
        <PurchaseDetails key={product.id}>

          <ImageContainer>
            <Image src={product.imageUrl} width={100} height={95} alt="" />
          </ImageContainer>

          <ProductDetails>
            <h4>{product.name}</h4>
            <span>{product.price}</span>
            <button>remover</button>
          </ProductDetails>
        </PurchaseDetails>
      ))}

      <DetailsConference>
        <div>
          <span className="quantity">Quantidade</span>
          <span className="quantity">{cart.length} itens</span>
        </div>

        <div>
          <span className="total">Valor Total</span>
          <span className="total">R$ {calculateTotal().toFixed(2)}</span>
        </div>

        <button disabled={isCreatingCheckoutSession} onClick={handleBuyButton} >
          Finalizar compra
        </button>
      </DetailsConference>
    </Content>
  )
}
