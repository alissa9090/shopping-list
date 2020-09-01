import React from 'react';
import { useRootData } from '../stores/hook';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ItemView from './itemView';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import ItemModel from '../models/itemModel';

const useStyles = makeStyles((theme) => ({
  newItemArea: {
    marginLeft: '5px',
    marginBottom: '15px'
  },
  newItemButton: {
    paddingTop: '15px'
  }
}));

const Items: React.FC<{ shopId: string }> = ({ shopId }) => {
  const classes = useStyles();

  const {itemIds, addItem} = useRootData(store => {
    const shop = store.getShopById(shopId);
    return {
      itemIds: shop.items.map((item: ItemModel) => item.id),
      addItem: shop.addItem
    }
  });

  const [title, setTitle] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const addNewItem = () => {
    if (title) {
      addItem(title);
      setTitle('');
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter'){
      addNewItem();
    }
  }

  return (
    <div>
      <div className={classes.newItemArea}>
        <TextField label="Add item" value={title} onChange={handleChange} onKeyPress={handleKeyPress} />
        <IconButton className={classes.newItemButton} color="primary" aria-label="add item" onClick={addNewItem}>
          <AddIcon />
        </IconButton>
      </div>
      { itemIds.map((itemId: string) => <ItemView key={itemId} shopId={shopId} itemId={itemId} />) }
    </div>
  );
};

export default Items;
