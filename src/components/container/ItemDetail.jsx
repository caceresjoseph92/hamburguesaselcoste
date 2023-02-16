import React from 'react'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import CounterWithHook from './../CounterWithHook';

const ItemDetail = ({ products }) => {
  return (
    <Row md={3} className="margin-top-11 margin-left-42">
      <Col>
      {products.map((product) => (
          <Card key={product.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={"../src/assets/images/"+product.image} />
              <Card.Body>
                  <Card.Title>
                      <strong>{product.name}</strong>
                  </Card.Title>
                  <Card.Text>
                      <strong>Description:</strong> {product.description}
                  </Card.Text>
                  <Card.Text>
                      <strong>Price:</strong> {product.price}
                  </Card.Text>  
                  <CounterWithHook />
              <div className="d-flex justify-content-center">
                  <Link to="">
                      <Button variant="success">Agregar</Button>
                  </Link>
              </div>
              </Card.Body>
          </Card>
      ))}
      </Col>
    </Row>
  ) 
}

export default ItemDetail
