import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

interface MenuItem {
  title: string;
  action: Function;
};

const SimpleMenu: React.FC<{ items: Array<MenuItem> }> = ({ items }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
    event.stopPropagation();
  };

  const closeMenu = (event: React.MouseEvent) => {
    setAnchorEl(null);
    event.stopPropagation();
  };

  const menuItemClickHandler = (item: MenuItem) => (event: React.MouseEvent) => {
    item.action();
    closeMenu(event);
  }

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={openMenu}
        onFocus={(event) => event.stopPropagation()}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}>
        {items.map(item => (
          <MenuItem
            key={item.title}
            onFocus={(event) => event.stopPropagation()}
            onClick={menuItemClickHandler(item)}>
              {item.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default SimpleMenu;
