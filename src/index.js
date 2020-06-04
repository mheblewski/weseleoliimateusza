import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "css-vars-ponyfill";
import './styles/general.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'aos/dist/aos.css';

ReactDOM.render(<App />, document.querySelector('#root'));