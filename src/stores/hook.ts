import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { storeContext } from './context';
import ShopsStore from './shopsStore';

export const useStoreData = <Selection, ContextData, Store>(
  context: React.Context<ContextData>,
  storeSelector: (contextData: ContextData) => Store,
  dataSelector: (store: Store) => Selection
) => {
  const value = React.useContext(context);
  if (!value) {
    throw new Error();
  }
  const store = storeSelector(value);
  return useObserver(() => dataSelector(store));
};

export const useRootData = <Selection>(dataSelector: (store: ShopsStore) => Selection) =>
  useStoreData(storeContext, (contextData) => contextData!, dataSelector);
