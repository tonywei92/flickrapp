import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import material-ui components
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';

// import material-ui icons
import CloseIcon from '@material-ui/icons/Close';
import RefreshIcon from '@material-ui/icons/Refresh';
import MuiAlert from '@material-ui/lab/Alert';

// import internal UI components
import AppBar from 'components/UI/AppBar';
import SimpleDialog from 'components/UI/SimpleDialog';

// import Flickr view and hooks
import Flickr from 'components/views/Flickr';

const { useFlickr } = Flickr;

const Alert = (props) => {
  const { children, severity } = props;
  return (
    <MuiAlert elevation={6} variant="filled" severity={severity}>
      {children}
    </MuiAlert>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  severity: PropTypes.string.isRequired,
};

const Home = () => {
  const flickr = useFlickr();
  const { tags, setTags } = flickr;
  const [tagsInput, setTagsInput] = useState('');
  const [showAbout, setShowAbout] = useState(false);
  const [openVisitNotif, setOpenVisitNotif] = React.useState(true);

  // initialize Flickr hooks
  const { refreshFeeds } = flickr;
  const handleVisitNotifClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenVisitNotif(false);
  };

  const handleShowAboutDialog = (open) => {
    setShowAbout(open);
  };

  const handleSearchSubmit = () => {
    if (tags !== tagsInput) {
      setTags(tagsInput);
      flickr.refreshFeeds(tagsInput);
    }
  };

  const handleMenuClick = () => {
    setShowAbout(true);
  };

  const handleSearchInputChanged = (e) => {
    setTagsInput(e.target.value);
  };

  // load feeds for the first time
  useEffect(() => {
    refreshFeeds();
  }, [refreshFeeds]);

  const handleRefreshFlickrFeeds = () => {
    refreshFeeds(tags);
  };

  // define Appbar buttons
  const appbarButtons = [
    <IconButton
      id="refresh-feeds"
      key="btn-refresh"
      onClick={() => handleRefreshFlickrFeeds()}
      color="inherit"
    >
      <RefreshIcon />
    </IconButton>,
  ];
  return (
    <>
      <Snackbar
        autoHideDuration={6000}
        open={openVisitNotif}
        onClose={handleVisitNotifClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Alert severity="success">
          FYI, you can swipe the image
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleVisitNotifClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Alert>
      </Snackbar>
      <AppBar
        title="FlickrApp"
        buttons={appbarButtons}
        searchInputValue={tagsInput}
        onSearchInputChanged={handleSearchInputChanged}
        onSearchSubmit={handleSearchSubmit}
        onMenuClick={handleMenuClick}
      />
      <SimpleDialog
        title="About"
        body="Made with ❤️ By Tony Song"
        handleClose={() => handleShowAboutDialog(false)}
        open={showAbout}
      />
      <Flickr flickr={flickr} />
    </>
  );
};

export default Home;
