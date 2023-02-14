import React from 'react'
import useCounter from './useCounter';

const CounterWithHook = () => {
    const { counter, increment, decremet, reset } = useCounter();

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />

            <button onClick={increment} className='btn btn-primary'>+1</button>
            <button onClick={reset} className='btn btn-primary'>Reset</button>
            <button onClick={decremet} className='btn btn-primary'>-1</button>
        </>
  )
}

export default CounterWithHook
