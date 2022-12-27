import React, { PropsWithChildren } from 'react';
import ShopsStore from './shopsStore';

export const storeContext = React.createContext<ShopsStore | null>(null);

const store = new ShopsStore();

export const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <storeContext.Provider value={store}>{children}</storeContext.Provider>
);

export default StoreProvider;
