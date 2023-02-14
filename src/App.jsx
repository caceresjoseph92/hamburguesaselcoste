import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import CounterWithHook from './components/CounterWithHook';
import CompoFetch from './components/CompoFetch';
//<CounterWithHook />
//<CompoFetch />
const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer/>
    </div>
  )
}

export default App

