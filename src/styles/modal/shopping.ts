import * as Dialog from '@radix-ui/react-dialog'

import { styled } from "..";

export const Content = styled(Dialog.Content, {
  minWidth: '30rem',
  height: '100%',
  padding: '0 3rem',
  backgroundColor: '$gray800',
  position: 'fixed',
  top: 0,
  right: 0,
  zIndex: 1,

  display: 'flex',
  flexDirection: 'column',
})

export const Title = styled(Dialog.Title, {
  fontSize: '$2xl',
  margin: '4.5rem 0 2rem',
})

export const PurchaseDetails = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  marginBottom: '1.5rem',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 100,
  height: 95,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }
});

export const ProductDetails = styled('div', {
    h4: {
      fontSize: '$md',
      color: '$gray300',
      marginBottom: '0.5rem',
    },
    span: {
      fontSize: '$md',
      fontWeight: 'bold',
      color: '$gray100',      
    },
    button: {
      border: 'none',
      background: 'transparent',
      fontSize: '$md',
      fontWeight: 'bold',
      color: '$red500',
      cursor: 'pointer',
      display: 'block',
      marginTop: '8px',
      transition: 'color 0.2s ease-in-out',

      '&:hover': {
        color: '$red300',
      }
    }
})

export const DetailsConference = styled('div', {
  marginTop: 'auto', // Joga o botão para o final do container
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  div: {
    display: 'flex',
    justifyContent: 'space-between',

    '.quantity': {
      fontSize: '$md',
    },

    '.total': {
      fontSize: '$xl',
      fontWeight: 'bold',
    }
  },

  button: {
    margin: '3rem 0',
    padding: '1.25rem',
    backgroundColor: '$green500',
    color: '$white',
    fontWeight: 'bold',
    fontSize: '$md',
  }
})

export const CloseButton = styled(Dialog.Close, {
  background: 'transparent',
  color: '$gray500',
  border: '0',
  lineHeight: '0',
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  cursor: 'pointer',
})
