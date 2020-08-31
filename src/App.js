import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import Room from './pages/room'
import SingleRoom from './pages/singleRoom'
import Error from './pages/error'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
   <>
   <Navbar />
   <Switch>
   <Route path="/" exact component={Home} />
   <Route path="/rooms" exact component={Room} />
   <Route path="/single-room/:slug" exact component={SingleRoom} />
     <Route component={Error}/>
   </Switch>
   </>
  );
}

export default App;
