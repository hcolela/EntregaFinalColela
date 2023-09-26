import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import category from "../../mocks/category.json";
import { Link } from "react-router-dom";
import './Categories.css';

const Categories = () => {

  const { data, loading } = useAsyncMock(category)

  if(loading)
  return <CircularProgress />

  return (
    <div className="container">
      <Typography variant="h4" style={{ color: "black" }} mt={10} mb={3} align="center">
        Categories
      </Typography>
      {
        data.map((category)=>{
          return(
            <div className="categories-container">
              <Card sx={{ width:'200px', height:'100px', display:'flex', alignItems:'center'}} key={category.id}>
              <CardContent sx={{ textDecoration:'none', textAlign:'center' }} component={Link} to={`/category/${category.category}`}>
                <Typography sx={{ fontSize:'20px' }} >{category.category}</Typography>
              </CardContent>
            </Card>
            </div>
          )
        })
      }
    </div>
  );
}

export default Categories;