import React from 'react';
import './App.css';
// import Header from "./Components/HomeComponent/Header/header";
// import Body from "./Components/HomeComponent/Main/body";
// import Footer from "./Components/HomeComponent/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Catalog from './Pages/CatalogPage/Catalog';
import ItemDetail from './Components/ItemComponent/iteamDetail';
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/' exact component={Home} /> 
        <Route path='/catalog' exact component={Catalog} /> 
        <Route path='/catalog/:id' component={ItemDetail} ></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
