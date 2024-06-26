import React, { useState, useRef } from "react";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { sideLinkAsisten } from "../../../data/sideLinkAsisten";
import Tooltip from '@mui/material/Tooltip';
import ActiveRoute from './ActiveRoute'
import Swal from "sweetalert2";
import LogoutAsisten from "../../../api/Asisten/LogoutAsisten";

const drawerWidth = 368;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  background: 'linear-gradient(to bottom, #FFFFFF, #8AA0E5)', 
});


const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  background: 'linear-gradient(to bottom, #FFFFFF, #8AA0E5)', 
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 2),
  ...theme.mixins.toolbar,
}));

const ListContainer = styled(List)({
  '& .MuiListItemButton-root:hover': {
    backgroundColor: '#1B2E5F',
    color: 'white',
  },
  '& .MuiListItemButton-root:hover .MuiListItemIcon-root, & .MuiListItemButton-root:hover .MuiTypography-root': {
    fontWeight: 'bold', 
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#7F3F98',
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
    zIndex: 30
  }),
);

// eslint-disable-next-line react/prop-types
export default function SidebarAsisten({children, profile, nama_asisten}) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      await LogoutAsisten();
    } catch (error) {
      console.error('Logout failed:', error);
      Swal.fire({
        icon: 'error',
        text: error.message,
      });
    }
  };

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open} elevation={0}>
</AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className="mt-20 ms-10 me-10">
            <img src="/logo-sismi.svg" alt="" />
            {/* <p className="font-extrabold text-xl" style={{margin: 'auto'}}>Dashboard</p> */}
        <IconButton sx={{marginLeft: 2}} onClick={open ? handleDrawerClose : handleDrawerOpen}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        </DrawerHeader>
        <List sx={{ padding: open ? 5 : 0 }}>
        <ListContainer>
        {sideLinkAsisten.map((item) => (
              <ListItem key={item.label} disablePadding sx={{ display: 'block' }}>
                {item.action === 'logout' ? (
                  <ListItemButton
                    sx={{
                      minHeight: 50,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      backgroundColor: 'inherit',
                      color: 'inherit',
                      '&:hover': {
                        backgroundColor: '#1B2E5F',
                        color: 'black',
                        fontWeight: 'bold'
                      },
                      marginBottom: 2,
                      borderRadius: 4
                    }}
                    onClick={() => handleLogout()} 
                  >
                    <Tooltip title={item.label} arrow>
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <img src={item.icon} alt={item.label}/>
                      </ListItemIcon>
                    </Tooltip>
                    <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                ) : (
                  <ActiveRoute to={item.link}>
                    <ListItemButton
                      sx={{
                        minHeight: 50,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                        backgroundColor: 'inherit',
                        color: 'inherit',
                        '&:hover': {
                          backgroundColor: '#1B2E5F',
                          color: 'black',
                          fontWeight: 'bold'
                        },
                        marginBottom: 2,
                        borderRadius: 4
                      }}
                    >
                      <Tooltip title={item.label} arrow>
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          <img src={item.icon} alt={item.label}/>
                        </ListItemIcon>
                      </Tooltip>
                      <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ActiveRoute>
                )}
              </ListItem>
            ))}
      </ListContainer>
    </List>

      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: 'white',
          height: '100vh', 
          overflowY: 'auto', 
          '-webkit-overflow-scrolling': 'touch', 
          '&::-webkit-scrollbar': {
            display: 'none', // Sembunyikan scrollbar pada browser berbasis Webkit
          }
        }}
        className='pt-20 pe-5'
      >
        <div className="akun flex justify-end mr-10" style={{ display: 'flex', alignItems: 'center' }}>
          <a href={profile}><p className="text-black font-bold text-2xl me-5 ">{nama_asisten}</p></a>
          <img src="/profile.svg" alt=""/>
        </div>
        {children}
      </Box>
    </Box>
  );
}
