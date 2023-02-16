import React, {useState} from 'react'
import products from "../../data/product.json"
import {useParams} from "react-router";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [prod, setProduct] = useState([]);
    const getData = async () => {
        const productFilter = products.filter((product) => product.id == id);
        setProduct(productFilter)
        return productFilter
    }
  getData()
  return <ItemDetail products={prod} />
}

export default ItemDetailContainer
