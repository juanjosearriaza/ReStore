import {
  Avatar,  
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card>
        <CardHeader title={product.name} avatar={<Avatar sx={{backgroundColor: "secondary.main"}}>{product.name.charAt(0).toUpperCase()}</Avatar>} titleTypographyProps={{ sx: {fontWeight: "bold", color: "primary.main"}}}/>
      <CardMedia
        component="img"
        sx={{backgroundSize: "constrained", bgcolor: "primary.light"}}
        
        image={product.pictureUrl}
        alt="product image"
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5" >
          $ {(product.price/100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
      </CardActions>
    </Card>
  );
}
