import React from 'react'
import ShopsStore from './shopsStore';
import {shops} from '../constants';

export const storeContext = React.createContext<ShopsStore | null>(null);

export const StoreProvider: React.FC = ({ children }) => {
  const store = ShopsStore.fromJS(shops);

  return (
    <storeContext.Provider value={store}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;