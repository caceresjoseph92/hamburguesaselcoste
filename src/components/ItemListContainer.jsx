import React from 'react'
import products from "../data/product.json"
import ItemList from './ItemList';
import Container from 'react-bootstrap/Container';

const ItemListContainer = () => {

  async function getData(){
    try{
      if(products.length === 0){
        console.log("No se encuentran productos");
      } 
      return products
    } catch(err){
      console.log(err)
    } 
  }

  async function getProduct(){
    try{
      await getData();
    } catch(err){
      console.log(err)
    }
  }

  getProduct();
  return (
    <>
      <Container fluid="lg">
        <ItemList products={products}/>
      </Container>
    </>
  )
}

export default ItemListContainer
