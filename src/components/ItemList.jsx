import React from 'react'
import Item from './Item'
import Row from 'react-bootstrap/Row';

const ItemList = ({products}) => {
  return (
    <Row md={3} className="g-4">
      {products.map((product) => (
        <Item 
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            category={product.category}
        />
      ))}
    </Row>
  ) 
}

export default ItemList
