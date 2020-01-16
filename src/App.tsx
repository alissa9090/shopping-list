import React from 'react'
import CityList from './city';
import StoreProvider from './context';
import Search from './search';
import './App.css';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <Search />
          <CityList />
        </header>
      </div>
    </StoreProvider>
  );
}

export default App;