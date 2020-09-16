import {styled} from '../styles/stitches.config';

export const Container = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  height: '5rem',
  padding: '0.8rem 1.6rem',

  border: '2px solid transparent',
  borderRadius: '0.5rem',

  fontSize: '$medium',
  fontWeight: '$bold',
  color: '$titles',

  transition: 'background-color 0.2s, color 0.2s',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.7,
  },

  variants: {
    layout: {
      primary: {
        backgroundColor: '$primary',
      },
      success: {
        backgroundColor: '$success',
      },
      warning: {
        backgroundColor: '$warning',
      },
      danger: {
        backgroundColor: '$danger',
      },
    },
    appearance: {
      outline: {
        backgroundColor: 'transparent',
      },
      default: {

      }
    }
  },
});

Container.compoundVariant({
  layout: 'primary',
  appearance: 'outline'
}, {
  color: '$primary',
  borderColor: '$primary',
});

Container.compoundVariant({
  layout: 'success',
  appearance: 'outline'
}, {
  color: '$success',
  borderColor: '$success',
});

Container.compoundVariant({
  layout: 'warning',
  appearance: 'outline'
}, {
  color: '$warning',
  borderColor: '$warning',
});

Container.compoundVariant({
  layout: 'danger',
  appearance: 'outline'
}, {
  color: '$danger',
  borderColor: '$danger',
});
