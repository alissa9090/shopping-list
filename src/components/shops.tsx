import React from 'react'
import { useRootData } from '../stores/hook';
import { makeStyles } from '@material-ui/core/styles';
import ShopView from './shopView';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  newShopArea: {
    marginLeft: '5px',
    marginTop: '15px'
  },
  newShopButton: {
    paddingTop: '15px'
  }
}));

const Shops: React.FC = () => {
  const classes = useStyles();

  const {shopIds, addShop} = useRootData(store => ({
    shopIds: store.shops.map(shop => shop.id),
    addShop: store.addShop
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
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter'){
      addNewShop();
    }
  }

  return (
    <div>
      {shopIds.map(shopId => <ShopView key={shopId} shopId={shopId} />)}
      <div className={classes.newShopArea}>
        <TextField label="Add shop" value={title} onChange={handleChange} onKeyPress={handleKeyPress} />
        <IconButton className={classes.newShopButton} color="primary" aria-label="add item" onClick={addNewShop}>
          <AddIcon />
        </IconButton>
      </div>
    </div>
  );
}


export default Shops;