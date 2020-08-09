import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from 'components/UI/ErrorBoundary';
import ErrorIcon from '@material-ui/icons/Error';
import Button from '@material-ui/core/Button';
import CenterContainer from 'components/UI/CenterContainer';
import Carousel from './Carousel';

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
      <Carousel
        feeds={flickr.feeds}
        loading={flickr.feedsLoading}
        error={flickr.error}
      />
    </ErrorBoundary>
  );
};

Flickr.propTypes = {
  flickr: PropTypes.shape({
    clearError: PropTypes.func,
    refreshFeeds: PropTypes.func,
    feeds: PropTypes.arrayOf(PropTypes.object.isRequired),
    feedsLoading: PropTypes.bool,
    error: PropTypes.instanceOf(Error),
  }).isRequired,
};
export default Flickr;
