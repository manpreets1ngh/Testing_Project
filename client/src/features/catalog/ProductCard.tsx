import LoadingButton from "@mui/lab/LoadingButton";
import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import agent from "../../app/api/agent";
import { useStoreContext } from "../../app/context/StoreContext";
import { Product } from "../../app/models/product";

interface Props{
    product: Product;
}
export default function ProductCard({product}: Props)
{
    const [loading, setLoading] = useState(false);
    const {setBasket} = useStoreContext();

    function handleAddItem(productId: number){
        setLoading(true);
        agent.Basket.addItem(productId, 1)
        .then(basket => setBasket(basket))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }
    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar = {
                    <Avatar sx={{bgcolor:'secondary.main'}}>
                        {product.productName.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.productName}
                titleTypographyProps={{
                    sx: {fontWeight:'bold', color:'primary.main'}
                }}
            />
            <CardMedia
                sx={{height:140, backgroundSize:'contain'}}
                image={product.pictureUrl}
                title={product.productName}
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5" component="div">
                    £{product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {product.productBrand} / {product.productType}
                </Typography>
            </CardContent>
            <CardActions>
                <LoadingButton loading={loading} onClick={() => handleAddItem(product.id)} size="small">Add to Cart</LoadingButton>
                <Button size="small" component={Link} to={`/catalog/${product.id}`}>View</Button>
            </CardActions>
        </Card>                
    )
}