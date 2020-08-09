import axios from 'axios';
import queryString from 'query-string';

const { REACT_APP_FLICKR_PUBLIC_FEED_URL } = process.env;

const getPublicFeed = (tags) => {
  const url = `${REACT_APP_FLICKR_PUBLIC_FEED_URL}?${queryString.stringify({
    tags,
  })}`;

  return axios.get(url).then((res) => {
    return res.data.data;
  });
};

export default {
  getPublicFeed,
};
