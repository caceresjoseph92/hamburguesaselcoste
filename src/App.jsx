import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Car from './components/Car';
import NavBar from './components/NavBar'
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer';

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
        exact path="/item/:id" 
        element={<ItemDetailContainer />}>
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

