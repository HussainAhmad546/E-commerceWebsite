import React from "react";
// import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import ProductScreen from "./screens/ProductScreen.js";
import CartScreen from "./screens/CartScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import ShippingScreen from "./screens/ShippingScreen.js";
import PaymentScreen from "./screens/PaymentScreen.js";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";


function App() {
  return (
    <Router>
    
      <Header />
      <main className="py-3" > 
        <Container>
          <Routes >
            <Route path='/register' element={<RegisterScreen></RegisterScreen>} />
            <Route path='/login' element={<LoginScreen></LoginScreen>} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path='/shipping' element={<ShippingScreen></ShippingScreen>} />
            <Route path='/payment' element={<PaymentScreen></PaymentScreen>} />
             <Route path='/placeorder' element={<PlaceOrderScreen></PlaceOrderScreen>} />
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/cart/:id?" element={<CartScreen />} />

            </Routes>
      </Container>  
      </main>
        <Footer />
        </Router>
    
  );
}

export default App;
