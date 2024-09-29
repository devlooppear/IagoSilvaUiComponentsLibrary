import { ReactNode } from "react";
import styled from "styled-components";

const CardContainer = styled.div<{ variant?: string }>`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  width: 300px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  ${({ variant }) =>
    variant === "outlined" &&
    `
    background: transparent;
    border: 1px solid #e0e0e0;
  `}
`;

const CardTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 18px;
`;

const CardContent = styled.p`
  margin: 0;
  font-size: 14px;
`;

const CardAction = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
`;

type CardProps = {
  title: string;
  content: string;
  action?: ReactNode;
  variant?: "default" | "outlined";
};

const Card = ({ title, content, action, variant = "default" }: CardProps) => {
  return (
    <CardContainer variant={variant}>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
      {action && <CardAction>{action}</CardAction>}
    </CardContainer>
  );
};

export default Card;
