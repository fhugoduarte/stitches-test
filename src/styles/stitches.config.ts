import { createStyled } from '@stitches/react';

export const {styled, css} = createStyled({
  tokens: {
    colors: {
      $primary: '#17c0eb',
      $titles: '#E1E1E6',
      $texts: '#A8A8B3',
      $supportTexts: '#737380',
      $background: '#3d3d3d',
      $mainShape: '#4b4b4b',
      $success: '#32ff7e',
      $warning: '#ffaf40',
      $danger: '#ff4d4d'
    },
    fontSizes: {
      $small: '1.2rem',
      $medium: '1.6rem',
      $large: '4.2rem'
    },
    fontWeights: {
      $normal: '400',
      $bold: '700',
    }
  },

  breakpoints: {
    'small-screen': (rule) => `@media (min-width: 400px) { ${rule} }`,
    'medium-screen': (rule) => `@media (min-width: 720px) { ${rule} }`,
    'large-screen': (rule) => `@media (min-width: 1080px) { ${rule} }`,
  },
});

const darkTheme = css.theme({
  colors: {
    $primary: '#17c0eb',
    $titles: '#E1E1E6',
    $texts: '#A8A8B3',
    $supportTexts: '#737380',
    $background: '#3d3d3d',
    $mainShape: '#4b4b4b',
    $success: '#32ff7e',
    $warning: '#ffaf40',
    $danger: '#ff4d4d'
  },
});

const lightTheme = css.theme({
  colors: {
    $primary: '#17c0eb',
    $titles: '#3d3d3d',
    $texts: '#4b4b4b',
    $supportTexts: '#737380',
    $background: '#F0F0F5',
    $mainShape: '#FFFFFF',
    $success: '#3ae374',
    $warning: '#ff9f1a',
    $danger: '#ff3838'
  }
});

export const themes = { darkTheme, lightTheme }

css.global({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  
  html: {
    fontSize: '62.5%',

    'small-screen': {
      fontSize: '52%',
    },
    'medium-screen': {
      fontSize: '54%',
    },
    'large-screen': {
      fontSize: '58%',
    },
  },

  body: {
    color: '$texts',
    textRendering: 'optimizeLegibility',

    backgroundColor: '$background'
  },

  button: {
    cursor: 'pointer',
  },

  a: {
    textDecoration: 'none',
  },

  h1: {
    fontSize: '$large',
    color: '$titles'
  }
})