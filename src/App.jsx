import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ItemListContainer from './components/container/ItemListContainer';
import Car from './components/Car';
//<CounterWithHook />
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
    <Routes>
      <Route 
        exact path="/" 
        element={<Home />}>
      </Route>
      <Route 
        exact path="/category/:category" 
        element={<ItemListContainer />}>
      </Route>
      <Route 
        exact path="/car" 
        element={<Car />}>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

