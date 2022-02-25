import { useEffect } from 'react';
import './App.css';
import { AddToCart } from './instacart/add-to-cart';
import { Cart } from './instacart/cart';
import { InstacartProvider, InstacartSDK } from './instacart/sdk'

const sdk = new InstacartSDK()

const App = () => {
  useEffect(() => {
    sdk.init({
      accessToken: 'someAccessToken'
    })
  }, [])

  return (
    <div className="App">
      <h1>Hi, I'm a Client's React App Site</h1>
      <div className="widget-container">
        <InstacartProvider sdk={sdk}>
          <div className="widget">
            <AddToCart product="apples" />
          </div>

          <div className="widget">
            <AddToCart product="oranges" />
          </div>
        </InstacartProvider>

        <InstacartProvider sdk={sdk}>
          <div className="widget">
            <Cart />
          </div>
        </InstacartProvider>
      </div>
    </div>
  );
}

export default App;
