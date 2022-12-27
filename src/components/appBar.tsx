import React from 'react';

import { observer } from 'mobx-react-lite';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { Share } from '@mui/icons-material';
import { useRootData } from '../stores/hook';
import { formatShoppingList } from '../utils';

const ButtonAppBar: React.FC = observer(() => {
  const store = useRootData((s) => s);

  const share = () => {
    if (navigator.share) {
      navigator
        .share({
          text: formatShoppingList(store.toJS()),
        })
        .catch(console.error);
    }
  };

  return (
    <Box
      cx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            cx={{
              marginLeft: '20px',
              flexGrow: 1,
            }}
          >
            Shopping list
          </Typography>
          {navigator.share && (
            <IconButton aria-label="share" color="inherit" onClick={share}>
              <Share />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
});

export default ButtonAppBar;
