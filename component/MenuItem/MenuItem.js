import { useState } from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";

const MenuItemS = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = !!anchorEl;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {props.expandItem && (
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            {props.name}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {props.expandItem.map((item) => (
              <MenuItem onClick={handleClose}>{item}</MenuItem>
            ))}
          </Menu>
        </div>
      )}
      {!props.expandItem && <Typography sx={{color:"white"}}>{props.name}</Typography>}
    </>
  );
};

export default MenuItemS;
