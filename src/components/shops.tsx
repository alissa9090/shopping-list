import React from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';
import { observer } from 'mobx-react-lite';
import ShopView from './shopView';
import { useRootData } from '../stores/hook';

const Shops: React.FC = observer(() => {
  const { shopIds, addShop } = useRootData((store) => ({
    shopIds: store.shops.map((shop) => shop.id),
    addShop: store.addShop,
  }));

  const [title, setTitle] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const addNewShop = () => {
    if (title) {
      addShop(title);
      setTitle('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      addNewShop();
    }
  };

  return (
    <div>
      {shopIds.map((shopId) => (
        <ShopView key={shopId} shopId={shopId} />
      ))}
      <Box
        cx={{
          marginLeft: '5px',
          marginTop: '15px',
        }}
      >
        <TextField
          label="Add shop"
          value={title}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <IconButton
          cx={{
            paddingTop: '15px',
          }}
          color="primary"
          aria-label="add item"
          onClick={addNewShop}
        >
          <Add />
        </IconButton>
      </Box>
    </div>
  );
});

export default Shops;
