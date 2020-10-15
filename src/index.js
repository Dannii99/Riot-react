import React from 'react'
import ReactDOM from 'react-dom'
import  App from './components/App.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import $ from 'jquery';
import Popper from 'popper.js';

const container = document.getElementById('root')

ReactDOM.render(<App />, container);

