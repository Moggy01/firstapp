import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes,
  Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="page1" element={<Page1 />} />
      <Route path="page2" element={<Page2 />} />
      <Route path="page3" element={<Page3 />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


