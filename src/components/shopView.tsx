import React from 'react'
import { useRootData } from '../stores/hook';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Items from './items';
import Menu from './base/Menu';

const useStyles = (highlightSummary: boolean) => makeStyles((theme) => ({
  headingContainer: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  summary: {
    backgroundColor: highlightSummary ? '#e8ebf7' : 'default'
  }
}));

const ShopView: React.FC<{ shopId: string }> = ({ shopId }) => {
  const {id, title, hasItems, deleteAllCompletedItems, deleteShop} = useRootData(store => {
    const shop = store.getShopById(shopId);
    return {
      id: shop.id,
      title: shop.title,
      hasItems: shop.items.length > 0,
      deleteAllCompletedItems: shop.deleteAllCompletedItems,
      deleteShop: () => store.deleteShop(shop.id)
    }
  });

  const classes = useStyles(hasItems)();

  const menuItems = [
    {
      title: 'Delete Shop',
      action: deleteShop
    },
    {
      title: 'Delete completed items',
      action: deleteAllCompletedItems
    }
  ];

  return (
    <Accordion key={id}>
      <AccordionSummary
        className={classes.summary}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Menu items={menuItems} />
        <div className={classes.headingContainer}>
          <Typography>{title}</Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Items shopId={id} />
      </AccordionDetails>
    </Accordion>
  );
}

export default ShopView;
