import React from 'react';
import { Btn } from './styles';

const Button = ({ color, children, onClick }) => (
  <Btn onClick={onClick} color={color}>{children}</Btn>
);

export default Button;
