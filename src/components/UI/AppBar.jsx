import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: '20px',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Navbar = (props) => {
  const {
    title,
    buttons,
    searchInputValue,
    onSearchInputChanged,
    onSearchSubmit,
    onMenuClick,
  } = props;
  const classes = useStyles();

  const [searchOpen, setSearchOpen] = useState(!!searchInputValue);
  const openSearch = (open) => {
    if (!open) {
      if (!searchInputValue.trim()) {
        setSearchOpen(open);
      }
    } else {
      setSearchOpen(open);
    }
  };

  const handleSearchKeyUp = (e) => {
    if (e.keyCode === 13) {
      onSearchSubmit();
    }
    if (e.keyCode === 27) {
      openSearch(false);
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {!searchOpen && title}
          </Typography>
          {searchOpen && (
            <div className={classes.search}>
              <InputBase
                autoFocus
                onKeyUp={handleSearchKeyUp}
                onBlur={() => {
                  openSearch(false);
                }}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                value={searchInputValue}
                onChange={onSearchInputChanged}
                inputProps={{ 'aria-label': 'search' }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      className={classes.searchIcon}
                      onClick={onSearchSubmit}
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
          )}

          {!searchOpen && (
            <IconButton
              aria-label="toggle password visibility"
              className={classes.searchIcon}
              color="inherit"
              onClick={() => openSearch(true)}
            >
              <SearchIcon />
            </IconButton>
          )}
          {buttons}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.defaultProps = {
  buttons: [],
  searchInputValue: '',
  onSearchInputChanged: () => {},
  onSearchSubmit: () => {},
  onMenuClick: () => {},
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.node),
  searchInputValue: PropTypes.string,
  onSearchInputChanged: PropTypes.func,
  onSearchSubmit: PropTypes.func,
  onMenuClick: PropTypes.func,
};

export default Navbar;
