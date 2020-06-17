import React from 'react';
import Home from './home';
import { Provider } from 'react-redux'
import configStore from '../store'

const store = configStore()

const Index = () => {
    
    return (
      <Provider store={store}>
          <Home />
      </Provider>
    )
};

export default Index
