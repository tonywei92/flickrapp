import React from 'react';
import ErrorBoundary from 'components/UI/ErrorBoundary';
import ErrorIcon from '@material-ui/icons/Error';
import Button from '@material-ui/core/Button';
import CenterContainer from 'components/UI/CenterContainer';

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
      <div></div>
    </ErrorBoundary>
  );
};

export default Flickr;
