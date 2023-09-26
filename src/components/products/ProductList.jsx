import { CircularProgress, Grid, Typography } from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import products from "../../mocks/products.json";
import ProductDetail from "./ProductDetail";

const ProductList = () => {
  const { data, loading } = useAsyncMock(products)

  if(loading)
  return <CircularProgress />

  return (
    <div className="container">
      <Typography variant="h4" style={{ color: "black" }} mt={10} mb={3} align="center">
        Products
      </Typography>
      <Grid container spacing={3}>
        {
          data.map((products)=>{
            return(
              <ProductDetail key={products.id} products={products}>
                
              </ProductDetail>
            )
          })
        }
      </Grid>
    </div>
  );

}
 
export default ProductList;