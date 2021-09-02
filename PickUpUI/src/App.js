import './App.css';
import { RouterConfig } from './navigation/RouterConfig';
import {Navigation} from "./components/Navigation"
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

import axios from 'axios';


function App() {

  const[restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
   .get('http://localhost:3002/api/v1/restaurants')
   .then((res) => {
     // console.log("getAllUsers > axios res=", res);
     // console.log(res.data);
    setRestaurants(res.data);
   })
   .catch((err) => {
     
   });
 
}, [])




  return (
    <div className="App" style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Navigation/>
      <RouterConfig
      restaurants={restaurants}
      />
      <Footer />
     
    </div>
  );
}

export default App;
