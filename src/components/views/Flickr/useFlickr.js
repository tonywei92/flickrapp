import { useState, useCallback } from 'react';
import FlickrService from 'services/Flickr';

const useFlickr = () => {
  const [feeds, setFeeds] = useState([]);
  const [tags, setTags] = useState('');
  const [feedsLoading, setFeedsLoading] = useState(false);
  const [error, setError] = useState(null);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // recreate refreshFeeds function only
  // if tags is changed
  const refreshFeeds = useCallback(async () => {
    setFeedsLoading(true);
    try {
      const feedsRes = await FlickrService.getPublicFeed(tags);
      setFeeds(feedsRes);
      setFeedsLoading(false);
    } catch (err) {
      // purpose of the set error state below
      // is to throw an error inside the Flickr
      // component. so the error handled inside
      // component instead of here
      setError(err);
    }
  }, [tags]);

  return {
    feeds,
    tags,
    setTags,
    feedsLoading,
    refreshFeeds,
    error,
    clearError,
  };
};

export default useFlickr;
