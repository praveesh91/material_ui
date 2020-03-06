import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Drawer, List, Grid} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';

import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography';

import alert from '../../assets/images/alerts deactive state.png'
import notification from '../../assets/images/notification active state.png'


import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import DashboardIcon from '@material-ui/icons/Dashboard';

import SidebarMenuItem from './SidebarMenuItem'

import Dashboard from '../../pages/Dashboard/Dashboard';
import LocalParkingOutlinedIcon from '@material-ui/icons/LocalParkingOutlined';

const drawerWidth = 225;


const appMenuItems = [
  {
    name: 'Dashboard',
    link: '/',
    Icon: DashboardIcon,
    // Icon: 'alert'
  },
  {
    name: 'Parking Management',
    // Icon: 'notification',
    Icon: LocalParkingOutlinedIcon,
    items: [
      {
        name: 'Parking Space Overview',
        link: '/parkOverview',
        // Icon: IconBarChart,
      }
    ]
  },
  {
    name: 'User Management',
    Icon: IconPeople,
    items: [
      {
        name: 'Level 1',
        link: '/users',
        // Icon: IconBarChart,
      }
    ]
  },
  {
    name: 'Role Management',
    Icon: AssignmentIndIcon,
    items: [
      {
        name: 'Level 1',
        link: '/reports',
        // Icon: IconBarChart,
      }
    ]
  },
  {
    name: 'Nested Pages',
    Icon: IconLibraryBooks,
    items: [
      {
        name: 'Level 2',
        link: '/reports',
        // Icon: IconBarChart,
      },
      {
        name: 'Level 2',
        items: [
            {
              name: 'Reports',
              link: '/reports',
              // Icon: IconBarChart,
            },
          {
            name: 'Reports',
            link: '/reports',
            // Icon: IconBarChart,
          },
        ],
      },
    ],
  },
]



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appMenu: {
    paddingTop: 15,
    paddingBottom:15,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    position: "relative",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    position: "relative",
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },

}));

function Sidebar(props) {

  const classes = useStyles();
  const theme = useTheme();

  // toggle sidebar drawer
  const open = props.openState 

  return (
    <div className={classes.root}>
      <Grid item xs={2}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: !open,
          [classes.drawerClose]: open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: !open,
            [classes.drawerClose]: open,
          }),
        }}
      >
        <List component="nav" disablePadding>
          {appMenuItems.map((item, index) => (
            <SidebarMenuItem {...item} key={index} />
          ))}
        </List>
      </Drawer>
      </Grid>
      {/* <Dashboard /> */}
      {/* <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main> */}
    </div>
  );
}

export default Sidebar