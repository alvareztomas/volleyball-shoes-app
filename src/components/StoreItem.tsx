import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { formatCurrency } from "../utils/formatCurrency";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  img: string;
  size: string;
  color: string;
  description: string;
  quantity: number;
}

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding: 1rem;
  max-width: 320px;
  max-height: 500px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
  object-fit: cover;
`;

const StoreItem = (props: StoreItemProps) => {
  return (
    <StyledCard>
      <StyledImg src={props.img} alt={props.name} />
      <Typography variant="h5">{props.name}</Typography>
      <Typography variant="subtitle2" mt={1} mb={3}>
        {props.description}
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Typography>Size: {props.size}</Typography>
        <Typography>Color: {props.color}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography>Stock: {props.quantity}</Typography>
        <Typography>Price: {formatCurrency(props.price)}</Typography>
      </Box>
    </StyledCard>
  );
};

export default StoreItem;
