import { Delete } from '@mui/icons-material';
import { Checkbox, FormControlLabel, IconButton } from '@mui/material';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useRootData } from '../stores/hook';

const ItemView: React.FC<{ shopId: string; itemId: string }> = observer(({ shopId, itemId }) => {
  const { completed, title, toggle, deleteItem } = useRootData((store) => {
    const shop = store.getShopById(shopId);
    const item = shop.getItemById(itemId);
    return {
      completed: item.completed,
      title: item.title,
      toggle: item.toggle,
      deleteItem: () => shop.deleteItem(item.id),
    };
  });

  return (
    <div>
      <FormControlLabel
        control={<Checkbox checked={completed} onChange={toggle} />}
        label={title}
        cx={{
          textDecoration: completed ? 'line-through' : '',
        }}
      />
      <IconButton aria-label="delete" onClick={deleteItem}>
        <Delete />
      </IconButton>
    </div>
  );
});

export default ItemView;
