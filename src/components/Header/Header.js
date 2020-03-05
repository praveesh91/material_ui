import React from 'react';
import {Link} from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MoreIcon from '@material-ui/icons/MoreVert';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import './Header.scss'

import logo from '../../assets/images/Logo.png'
import hamburger from '../../assets/images/hamburger menu.png'
import alert from '../../assets/images/alerts deactive state.png'
import notification from '../../assets/images/notification active state.png'

import HeaderProfileDropdown from './HeaderProfileDropdown';
import HeaderAlertDropdown from './HeaderAlertDropdown';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  appBar:{
    zIndex: 99999,
    backgroundColor:'#63DAFB'
  },
  toolMinHeight:{
    marginTop: '-30px',
    marginBottom: '-12px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: '20px',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 0,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    right: '0',
    pointerEvents: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1.5, 1.5, 1.5, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 400,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  // alertBox: {
  //   maxHeight: '300px',
  //   overflowY: 'hidden',
  // }
}));


function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [AnchorAlertEl, setAnchorAlertEl] = React.useState(null);


  const isMenuOpen = Boolean(anchorEl);
  const isAlertOpen = Boolean(AnchorAlertEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleAlertMenuOpen = event => {
    setAnchorAlertEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleAlertClose = () => {
    setAnchorAlertEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <HeaderProfileDropdown />
    </Menu>
  );
  const alertMenuId = 'primary-search-account-menu';
  const renderAlertMenu = (
    <Menu
      className={classes.alertBox}
      anchorEl={AnchorAlertEl}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      id={alertMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isAlertOpen}
      onClose={handleAlertClose}
    >
      <HeaderAlertDropdown />
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <OfflineBoltOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolMinHeight}>
          <Typography className={classes.title} variant="h6" noWrap>
            <p className="login_detials">
              Last login: Wednesday | 23 October 2019 | 17:00 Hours 
            </p>
          </Typography>
        </Toolbar>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/"><img className="logo" src={logo} alt="Logo" /></Link>
          </Typography>
          <IconButton
            onClick={props.toggleMenu}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <img className="hamburger-icon" src={hamburger} />
            {/* <FormatAlignLeftIcon /> */}
          </IconButton>
          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton 
              aria-label="show 4 new mails" 
              style={{ backgroundColor: 'transparent' }}
              color="inherit">
              {/* <Badge badgeContent={4} color="secondary"> */}
                <OfflineBoltOutlinedIcon />
              {/* </Badge> */}
              {/* <img className="header-icon" src={alert} /> */}
            </IconButton>
            <IconButton 
              style={{ backgroundColor: 'transparent' }}
              aria-label="show 17 new notifications" 
              color="inherit"
              onClick={handleAlertMenuOpen}>
              <Badge badgeContent={17} color="secondary">
                <NotificationsNoneIcon />
              </Badge>
              {/* <img className="header-icon" src={notification} /> */}
            </IconButton>
            <Button
              edge="end"
              style={{ backgroundColor: 'transparent' }}
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle /><h4>Jean Donas</h4><ArrowDropDownIcon/>
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderAlertMenu}
    </div>
  );
}

export default Header