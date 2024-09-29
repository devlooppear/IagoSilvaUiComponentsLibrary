import { ReactNode } from "react";
import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "secondary" | "success" | "danger" | "warning";

const variantStyles = {
  primary: css`
    background-color: #007bff;
    color: white;
  `,
  secondary: css`
    background-color: #6c757d;
    color: white;
  `,
  success: css`
    background-color: #28a745;
    color: white;
  `,
  danger: css`
    background-color: #dc3545;
    color: white;
  `,
  warning: css`
    background-color: #ffc107;
    color: black;
  `,
};

const StyledButton = styled.button<{ variant: ButtonVariant }>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  ${({ variant }) => variantStyles[variant]}

  &:hover {
    opacity: 0.9;
  }
`;

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
};

const Button = ({ children, variant = "primary" }: ButtonProps) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};

export default Button;
