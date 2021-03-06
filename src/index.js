import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './store/reducer/reducer'
import axios from 'axios'


const token=localStorage.getItem('token')
axios.defaults.baseURL = 'https://fatmug-blog-server.herokuapp.com/'

const store=createStore(reducer)
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter basename="/blog-portal-frontend/">
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

