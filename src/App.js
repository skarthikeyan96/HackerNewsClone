import React, { Component } from 'react';
import './App.css'
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './components/navbar'
import Home from './components/Home'
import News from './components/News'
import {BrowserRouter,Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
        <div className="App">
        <Navbar />
        <Route exact path="/" component={Home}></Route>
        <Route path="/News" component={News}></Route>
       </div>
       </BrowserRouter>
    );
  }
}

export default App;
