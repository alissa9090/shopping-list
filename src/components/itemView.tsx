import React from 'react';
import { useRootData } from '../stores/hook';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = (completed: boolean) => makeStyles((theme) => ({
  item: {
    textDecoration: completed ? 'line-through' : ''
  }
}));

const ItemView: React.FC<{ shopId: string, itemId: string }> = ({shopId, itemId}) => {
  const { completed, title, toggle, deleteItem } = useRootData(store => {
    const shop = store.getShopById(shopId);
    const item = shop.getItemById(itemId);
    return {
      completed: item.completed,
      title: item.title,
      toggle: item.toggle,
      deleteItem: () => shop.deleteItem(item.id)
    }
  });

  const classes = useStyles(completed)();
  
  return (
    <div>
      <FormControlLabel
        control={<Checkbox checked={completed} onChange={toggle}/>}
        label={title}
        className={classes.item}
      />
      <IconButton aria-label="delete" onClick={deleteItem}>
        <DeleteIcon />
      </IconButton>
    </div>
  )
}

export default ItemView;