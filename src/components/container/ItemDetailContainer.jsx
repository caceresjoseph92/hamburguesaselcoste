import React, {useState, useEffect} from 'react'
import products from "../../data/product.json"
import {useParams} from "react-router";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([]);
    useEffect(() => {
      async function responseData() {
        try{
          const response = await products //fetch(products)
          //const data = await response.json();
          setProduct(response)
        } catch (err){
          console.log(err)
        }
      }
      responseData()
    }, []);
  const productFilter = product.filter((prod) => prod.id == id);
  return <ItemDetail products={productFilter} />
}

export default ItemDetailContainer
