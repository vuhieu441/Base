import React from 'react';
import './Styled.scss';

type Props = {
  children: React.ReactElement;
};

const GlobalStyles = ({ children }: Props) => {
  return children;
};

export default GlobalStyles;
