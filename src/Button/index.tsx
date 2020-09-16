import React, {memo, useMemo, ReactNode, ButtonHTMLAttributes} from 'react';

import {themes} from '../styles/stitches.config';
import {Container} from './styles';

type Layout = 'primary' | 'success' | 'danger' | 'warning';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  outline?: boolean;
  layout?: Layout;
}

const Button = ({children, outline = false , layout = 'primary', ...rest}: Props) => {
  const appearance = useMemo(() => outline ? 'outline' : 'default', [outline]);

  return (
    <Container className={themes.darkTheme} layout={layout} appearance={appearance} {...rest}>
      {children}
    </Container>
  )
}

export default memo(Button);