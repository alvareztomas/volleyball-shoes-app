import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { formatCurrency } from "../utils/formatCurrency";
import Button from "@mui/material/Button";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  img: string;
  size: string;
  color: string;
  description: string;
  stock: number;
}

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding: 1rem;
  max-width: 320px;
  max-height: 550px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  max-height: 250px;
  object-fit: cover;
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
`;

const StoreItem = (props: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const itemsInCart = getItemQuantity(props.id);

  return (
    <StyledCard>
      <StyledImg src={props.img} alt={props.name} />
      <Typography variant="h5">{props.name}</Typography>
      <Typography fontStyle="italic" variant="subtitle2" mt={1} mb={3}>
        {props.description}
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Typography>Size: {props.size}</Typography>
        <Typography>Color: {props.color}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography>Stock: {props.stock}</Typography>
        <Typography>Price: {formatCurrency(props.price)}</Typography>
      </Box>
      <Box>
        {itemsInCart === 0 ? (
          <Button
            onClick={() => increaseCartQuantity(props.id)}
            variant="outlined"
            sx={{ margin: "20px 0", width: "100%" }}>
            Add to Cart +
          </Button>
        ) : (
          <Box
            mt={2}
            display="flex"
            alignItems="center"
            flexDirection="column"
            gap={1}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={3}>
              <Button
                variant="outlined"
                onClick={() => decreaseCartQuantity(props.id)}>
                -
              </Button>
              <Typography variant="h6">{itemsInCart} in cart</Typography>
              <Button
                variant="outlined"
                onClick={() => increaseCartQuantity(props.id)}>
                +
              </Button>
            </Box>
            <Button
              onClick={() => removeFromCart(props.id)}
              variant="outlined"
              color="warning">
              Remove
            </Button>
          </Box>
        )}
      </Box>
    </StyledCard>
  );
};

export default StoreItem;
