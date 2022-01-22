import React from "react";
import {
  Link,
} from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import './Header.css'
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';

import { Settings } from "../Settings";

export const Header = ({ narrow }) => {
  const navs = [
  ];

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <Box
      sx={{
        // here we have the main header
        height: "52px",
        display: "flex",
        bgcolor: "action.disabledBackground",
        overflow: "auto",
        color: "white",
        background: "#1B1B32",
      }}
    >
      <div className="logo"></div>
      <Box sx={{flexGrow: 1, minWidth: "36px"}}></Box>
      <Settings narrow={narrow}/>
    </Box>
  );
};
