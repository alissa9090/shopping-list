import React from 'react'
import ShopsStore from './shopsStore';

export const storeContext = React.createContext<ShopsStore | null>(null);

export const StoreProvider: React.FC = ({ children }) => {
  const store = new ShopsStore();

  return (
    <storeContext.Provider value={store}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;