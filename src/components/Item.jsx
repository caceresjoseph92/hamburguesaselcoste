import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Item = ({id, name, description, price, category}) => {
  return (

    <Col>
    <Card  key={id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
         {description} , {price}, {category}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
  </Col>
  )
}

export default Item
