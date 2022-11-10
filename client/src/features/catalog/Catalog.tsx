import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import agent from "../../app/api/agent";
import Loading from "../../app/layout/Loading";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog()
{
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.catalog.list().then(products => setProducts(products)).catch(error => console.log(error)).finally(() => setLoading(false))
  }, [])

  if(loading) return <Loading message='Loading Products...'/>

    return(
        <ProductList products={products}/>
    )
}