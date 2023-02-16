import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Item = ({id, name, image, price, category}) => {
  return (
    <Col>
    <Card key={id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={"../src/assets/images/"+image} />
        <Card.Body>
            <Card.Title>
                <strong>{name}</strong>
            </Card.Title>
            <Card.Text>
                 <strong>Price:</strong> {price}
            </Card.Text>
            <Card.Text>
                <strong>Category:</strong> {category}
            </Card.Text>
        <div className="d-flex justify-content-center">
            <Link to={`/item/${id}`}>
                <Button variant="success">Detalle</Button>
            </Link>
        </div>
        </Card.Body>
    </Card>
  </Col>
  )
}

export default Item
