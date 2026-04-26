import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.jsx';
import Introduction from './Introduction.jsx';
import Contract from './Contract.jsx';
import Layout from './Layout.jsx';
import Documentation from './Documentation.jsx';
import Inventory from './Inventory.jsx';
import Product from './Product.jsx';
import Survey from './Survey.jsx';
import Cards from './Cards.jsx';
import IntroForm from './IntroForm.jsx';
import Evaluations from './Evaluations.jsx';
import CatSlideshow from "./CatSlideshow.jsx"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>        
            <Route path="/" element={<App />}></Route>
            <Route path='/Introduction' element={<Introduction />}></Route>      
            <Route path='/Contract' element={<Contract />}></Route>
            <Route path='/Documentation' element={<Documentation />}></Route>
            <Route path='/Inventory' element={<Inventory />}></Route>
            <Route path='/Product' element={<Product />}></Route>
            <Route path='/Survey' element={<Survey />}></Route>
            <Route path='/Cards' element={<Cards />}></Route>
            <Route path="/IntroForm" element={<IntroForm />} />
            <Route path="/Evaluations" element={<Evaluations />} />
            <Route path="/slideshow" element={<CatSlideshow />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
