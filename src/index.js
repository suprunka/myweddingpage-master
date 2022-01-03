import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, compose, applyMiddleware } from 'redux'
import {rootReducer} from './redux/reducers/index'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer,middleware);


if (process.env.NODE_ENV === 'production') {
  console.log = () => {}
}
console.log(process.env.APIKEY, process.env.REACT_APP_APIKEY)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
