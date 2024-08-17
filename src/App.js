import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import PhonecasesPage from "./components/Phonecases/PhonecasesPage";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import NavBar from './components/Navbar/NavBar';
import {useEffect, useState} from "react";
import axios from "axios";
import { CartContext } from './components/Contexts/CartContext';



function App() {
  const [allPhonecases, setAllPhonecases] = useState([]);
  const [myCart, addToCart] = useState([{}]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    async function getData(){
      const res = await axios.get("/v1/phonecases");
      return res;
    }
    getData().then((res) => setAllPhonecases(res.data));
    getData().catch((err) => console.log(err));
  }, []);
  return (
      <CartContext.Provider value={{myCart, addToCart, total, setTotal}}>
      <Router>
        <NavBar></NavBar>
        <div className='page-container'>
          <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/phonecases" element={<PhonecasesPage allPhonecases={allPhonecases}/>}/>
            <Route path = "/checkout" element={<Cart/>}/>
          </Routes>          
        </div>
      </Router>
      </CartContext.Provider>
  );
}

export default App;
