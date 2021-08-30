import './App.css';
import { RouterConfig } from './navigation/RouterConfig';
import {Navigation} from "./components/Navigation"
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <RouterConfig/>
      <Footer />
     
    </div>
  );
}

export default App;
