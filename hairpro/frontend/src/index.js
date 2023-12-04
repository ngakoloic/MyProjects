import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import myReducers from './reducers/AppContext';
import { legacy_createStore as createStore } from 'redux';
import "./styles/index.scss";

//Create the store
const myStore = createStore(myReducers);
//This will console log the current state everytime the state changes
myStore.subscribe(() => console.log(myStore.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={myStore}><App /></Provider>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);