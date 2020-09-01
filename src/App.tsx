import React from 'react'
import StoreProvider from './stores/context';
import Shops from './components/shops';
import ButtonAppBar from './components/appBar';
import '../assets/css/App.less';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <div className="App">
        <div className="app_sector header">
          <ButtonAppBar/>
        </div>
        <div className="app_sector shops">
          <Shops />
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;