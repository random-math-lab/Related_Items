import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
import WebFont from 'webfontloader';


WebFont.load({
    google: {
      families: ['Montserrat', 'sans-serif']
    }
  });

ReactDOM.render(<App /> , document.getElementById('app'));