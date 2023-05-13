


import React from 'react';
import ReactDOM from "react-dom/client";


// import { FirstApp } from './FirstApp'
// import { HelloWorldApp } from './HelloWorldApp';
import { CounterApp } from './CounterApp';


import './styles.css';




ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <FirstApp title="Hola soy Goku"  /> */}
        <CounterApp value={1} />
    </React.StrictMode>
);