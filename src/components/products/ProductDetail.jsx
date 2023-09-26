import { Card, CardContent, Grid, Typography } from "@mui/material";
import './ProductDetail.css';
import ProductModalInfo from "./ProductModalInfo";
import { useState } from "react";

const ProductDetail = ({ products }) => {
  const { id, image, name, model, category, price, itHasDues, isAnnOffer } = products
  const [isSelected, setIsSelected] = useState(false)
  //función para setear.
  const handleClick = () =>{
    setIsSelected((prev) => !prev)
  }

  return (<>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className="card-products-container" onClick={handleClick}>
        <img src={image} />
        <CardContent>
          <Typography>{id}</Typography>
          <Typography>{name}</Typography>
          <Typography>{model}</Typography>
          <Typography>{category}</Typography>
          <Typography sx={{ fontSize:'25px' }}>${price.toFixed(2)}</Typography>
        </CardContent>
      </Card>
    </Grid>
    {
      isSelected && <ProductModalInfo products={products} open={isSelected} setOpen={setIsSelected} />
    }
    
    </>
  );
}
 
export default ProductDetail;