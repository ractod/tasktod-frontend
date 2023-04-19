import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './App';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <BrowserRouter>
        <App />
     </BrowserRouter>
);