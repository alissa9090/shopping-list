import React from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import { observer } from 'mobx-react-lite';
import ItemView from './itemView';
import { useRootData } from '../stores/hook';
import ItemModel from '../models/itemModel';

const Items: React.FC<{ shopId: string }> = observer(({ shopId }) => {
  const { itemIds, addItem } = useRootData((store) => {
    const shop = store.getShopById(shopId);
    return {
      itemIds: shop.items.map((item: ItemModel) => item.id),
      addItem: shop.addItem,
    };
  });

  const [title, setTitle] = React.useState('');
  const handleChange = (event: { target: { value: string } }) => {
    setTitle(event.target.value);
  };

  const addNewItem = () => {
    if (title) {
      addItem(title);
      setTitle('');
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      addNewItem();
    }
  };

  return (
    <div>
      <Box
        cx={{
          marginLeft: '5px',
          marginBottom: '15px',
        }}
      >
        <TextField
          label="Add item"
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
          onClick={addNewItem}
        >
          <Add />
        </IconButton>
      </Box>
      {itemIds.map((itemId: string) => (
        <ItemView key={itemId} shopId={shopId} itemId={itemId} />
      ))}
    </div>
  );
});

export default Items;
