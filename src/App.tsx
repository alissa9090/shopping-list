import React from 'react'
import StoreProvider from './stores/context';
import Shops from './components/shops';
import ButtonAppBar from './components/appBar';
import '../assets/css/App.less';
import Palette from './components/base/Palette';

const App: React.FC = () => {
  return (
    <Palette>
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
    </Palette>
  );
}

export default App;