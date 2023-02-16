import React from 'react'
import useCounter from './useCounter';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const CounterWithHook = () => {
    const { counter, increment, decremet } = useCounter();

    return (
        <>         
            <div className="input-group justify-content-center">
                    <div className="input-group-prepend">
                        <Button onClick={decremet} className='btn btn-warning'>-1</Button>
                    </div>
                    <InputGroup.Text>{counter}</InputGroup.Text>
                    <div className="input-group-prepend">
                        <Button onClick={increment} className='btn btn-warning'>+1</Button>
                    </div>
                </div>
            <hr />            
        </>
    )
}

export default CounterWithHook
