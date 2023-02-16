import {useState} from 'react'

const UseCounter = ( initialValue = 0) => {

const[counter, setCounter] = useState(initialValue)

const increment = () => {
  setCounter(counter + 1);
}

const decremet = () => {
  if( counter === 0 ) return;
  setCounter(counter - 1);
}

/*
const reset = () => {
  setCounter(0);
}
*/

  return {
    counter,
    increment,
    decremet,
    //reset
  }
}

export default UseCounter
