import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './about';
import Header from './header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <About />
  </div>
    
);
