import React from "react";
import './App.css';
import {HeaderNav} from "./components/HeaderNav"
import {Footer} from "./components/Footer"
import {  RouterConfig } from "./navigation/RouterConfig"
function App() {
  return (
    <div className="App">
    
      <HeaderNav/>
      <div>this is the test</div>
      <RouterConfig />
      <Footer/>
    </div>
    
  );
}

export default App;
