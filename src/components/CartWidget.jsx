import React from 'react'
import { BsCartFill  } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';

const CartWidget = () => {
  return (
    <div>
        <Button variant="outline-warning"><BsCartFill /> 3</Button>{''}
    </div>
  )
}

export default CartWidget
