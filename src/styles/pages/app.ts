import * as Dialog from '@radix-ui/react-dialog'

import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const ShoppingCartButton = styled('button', {
  backgroundColor: '$gray800',
  color: '$gray100',
  padding: '0.75rem',
  borderRadius: '6px',
  border: 'none',
  cursor: 'pointer',
  position: 'relative',


  '&:hover': {
    filter: 'brightness(0.9)'
  },

  span: {
    position: 'absolute',
    top: '-0.6rem',
    right: '-0.6rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    fontWeight: 'bold',
    color: 'white',

    backgroundColor: '$green300',
    height: '1.5rem',
    width: '1.5rem',
    borderRadius: '50%',
  }
})

export const Content = styled(Dialog.Content, {
  minWidth: '30rem',
  height: '100vh',
  padding: '2rem',
  backgroundColor: '$gray800',
  position: 'fixed',
  right: 0,
})
