import axios from 'axios';
const queryString = require('query-string');
const { REACT_APP_FLICK_PUBLIC_FEED_URL } = process.env;

const getPublicFeed = (tags) => {
  const url = `${REACT_APP_FLICK_PUBLIC_FEED_URL}?${queryString.stringify({
    tags,
  })}`;

  return axios.get(url).then((res) => {
    return res.data.data;
  });
};

export default {
  getPublicFeed,
};
