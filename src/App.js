import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Router, BrowserRouter} from "react-router-dom";
import PhotosContainer from './components/Photos/PhotosContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Route path="/" render={ () => <PhotosContainer/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
