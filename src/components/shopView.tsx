import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { observer } from 'mobx-react-lite';
import { useRootData } from '../stores/hook';
import Items from './items';
import Menu from './base/Menu';

const ShopView: React.FC<{ shopId: string }> = observer(({ shopId }) => {
  const { id, title, hasItems, deleteAllCompletedItems, deleteShop } = useRootData((store) => {
    const shop = store.getShopById(shopId);
    return {
      id: shop.id,
      title: shop.title,
      hasItems: shop.items.length > 0,
      deleteAllCompletedItems: shop.deleteAllCompletedItems,
      deleteShop: () => store.deleteShop(shop.id),
    };
  });

  const menuItems = [
    {
      title: 'Delete Shop',
      action: deleteShop,
    },
    {
      title: 'Delete completed items',
      action: deleteAllCompletedItems,
    },
  ];

  return (
    <Accordion>
      <AccordionSummary
        cx={{
          backgroundColor: hasItems ? '#9c0d70' : 'default', // blue
          color: hasItems ? '#ffffff' : 'default',
        }}
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Menu items={menuItems} />
        <Box
          cx={{
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
        >
          <Typography>{title}</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Items shopId={id} />
      </AccordionDetails>
    </Accordion>
  );
});

export default ShopView;
