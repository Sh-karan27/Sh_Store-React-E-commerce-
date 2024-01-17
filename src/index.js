import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './Components/context/Productcontext';
import { FilterContextProvider } from './Components/context/FilterContext';
import { CartPorvider } from './Components/context/cart_context';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-7dooc47tmgkho65m.us.auth0.com'
      clientId='6iyh7ixsTZSwEaeAEQ4xS2jTPaquI9Yl'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}>
      <AppProvider>
        <FilterContextProvider>
          <CartPorvider>
            <App />
          </CartPorvider>
        </FilterContextProvider>
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
