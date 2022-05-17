import React, { FC } from 'react';


interface ButtonProps {}

const Button: FC<ButtonProps> = () => (
  <div data-testid="Button">
    Button Component
  </div>
);

export default Button;
