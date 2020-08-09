import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from 'components/UI/ErrorBoundary';
import ErrorIcon from '@material-ui/icons/Error';
import Button from '@material-ui/core/Button';
import CenterContainer from 'components/UI/CenterContainer';
import FlickrCarousel from './FlickrCarousel';

const Flickr = (props) => {
  const { flickr } = props;
  return (
    <ErrorBoundary
      renderFallback={(clearError) => {
        const clearAllError = () => {
          flickr.clearError();
          clearError();
          flickr.refreshFeeds();
        };
        return (
          <CenterContainer>
            <ErrorIcon color="error" />
            <p>Failed to load Flicker Feeds</p>
            <Button variant="contained" color="primary" onClick={clearAllError}>
              Retry
            </Button>
          </CenterContainer>
        );
      }}
    >
      <FlickrCarousel
        feeds={flickr.feeds}
        loading={flickr.feedsLoading}
        error={flickr.error}
      />
    </ErrorBoundary>
  );
};

Flickr.propTypes = {
  flickr: PropTypes.objectOf({
    clearError: PropTypes.func,
    refreshFeeds: PropTypes.func,
  }).isRequired,
};
export default Flickr;
