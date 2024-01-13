import { createContext, ReactNode, useCallback, useContext, useState } from 'react'

interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
}

interface ProductContextType {
  cart: Product[]
  addProduct: (data: Product) => Promise<void>
}

interface ProductsProviderProps {
  children: ReactNode
}

export const ProductsContext = createContext({} as ProductContextType)

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [cart, setCart] = useState<Product[]>([])

  const addProduct = useCallback(
    async (data: Product) => {

      setCart((state) => [data, ...state])
    }, [],)

  return (
    <ProductsContext.Provider
      value={{
        cart,
        addProduct
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export function useProductsContext() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProductsContext must be used within a ProductsProvider');
  }
  return context;
}