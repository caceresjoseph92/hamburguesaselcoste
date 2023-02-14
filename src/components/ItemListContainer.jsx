import React, { useEffect, useState } from 'react'
import products from "../data/product.json"
import ItemList from './ItemList';
import Container from 'react-bootstrap/Container';

const ItemListContainer = () => {
  const [product, setProduct] = useState([])
  const getProduct = async () => {
      const response = await products //fetch(products);
      //const product = await response.json();
      return response;    
  }
  
  useEffect(() => {
    getProduct().then((product) => setProduct(product));
  }, []);

  return (
    <>
      <Container fluid="lg">
        <ItemList products={product}/>
      </Container>
    </>
  )
}

export default ItemListContainer
