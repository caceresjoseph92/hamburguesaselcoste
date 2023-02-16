import React, { useEffect, useState } from 'react'
import products from "../../data/product.json"
import ItemList from './ItemList';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const {category} = useParams()
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
    const productFilter = product.filter((prod) => prod.category == category);
  return (
    <>
      <Container fluid="lg">
        {
          category ? <ItemList products={productFilter} /> : <ItemList products={products} />
        }
      </Container>
    </>
  )
}

export default ItemListContainer
