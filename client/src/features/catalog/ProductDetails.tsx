import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Product } from "../../app/models/product";

export default function ProductDetails() {
  const params = useParams<'id'>();
  const id = params.id;
  const [product, setProduct] = useState<Product | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
    .then(response => setProduct(response.data))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }, [id]);

  if(loading) return <h1>Loading...</h1>
  if(!product) return <h1>no product found</h1>
  
  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <img src={product.pictureUrl} alt={product.name} style={{width: "100%"}}></img>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{mb: 2}}></Divider>
        <Typography variant="h5" color="secondary">${(product.price/100).toFixed(2)}</Typography>

        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{product.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{product.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Brand</TableCell>
                <TableCell>{product.brand}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Stock</TableCell>
                <TableCell>{product.quantityInStock}</TableCell>
              </TableRow>
            </TableBody>
            
          </Table>
        </TableContainer>
      </Grid>


    </Grid>
    )
}