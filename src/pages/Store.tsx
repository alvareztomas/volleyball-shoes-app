import React from "react";
import Grid from "@mui/material/Grid";
import shoesData from "../data/items.json";
import StoreItem from "../components/StoreItem";

const Store = () => {
  return (
    <Grid container rowGap={3} display="flex" justifyContent="space-between">
      {shoesData.map((shoe) => (
        <Grid item xs={12} sm={6} md={6} lg={4} key={shoe.id}>
          <StoreItem {...shoe} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Store;
