import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom" 
import 'react-toastify/dist/ReactToastify.css'
import { CookiesProvider } from "react-cookie";

import './index.css';
import HomePage from './landingpage/home/HomePage';
import AboutPage from './landingpage/about/AboutPage';
import SignUpPage from './landingpage/signup/SignUpPage';
import LoginPage from './landingpage/signup/LoginPage';
import HomePageAuth from './landingpage/signup/HomePageAuth';
import ProductsPage from './landingpage/products/ProductsPage';
import PricingPage from './landingpage/pricing/PricingPage';
import SupportPage from './landingpage/support/SupportPage';
import Navbar from './landingpage/Navbar';
import Footer from './landingpage/Footer';
import NotFound from './landingpage/NotFound';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/signup" element={<SignUpPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/home" element={<HomePageAuth/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/pricing" element={<PricingPage/>}/>
    <Route path="/products" element={<ProductsPage/>}/>
    <Route path="/support" element={<SupportPage/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </CookiesProvider>
);

