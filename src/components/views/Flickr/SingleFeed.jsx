/* eslint-disable camelcase */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

// import material-ui components
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const { REACT_APP_FLICKR_IMAGE_ERROR_FALLBACK } = process.env;

const useStyles = makeStyles({
  media: {
    // limit image height
    height: 'calc( 100vh - 400px )',
  },
  textEllipsis: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
});

const imageErrorFallback = REACT_APP_FLICKR_IMAGE_ERROR_FALLBACK;

const SingleFeedsView = forwardRef((props, ref) => {
  const {
    title,
    author,
    categories,
    direct_link,
    flickr_link,
    published_at,
  } = props.feed;
  const classes = useStyles();

  const openInFlickr = () => {
    window.open(flickr_link, 'blank');
  };

  const setImageFallback = (eventObj) => {
    // eslint-disable-next-line no-param-reassign
    eventObj.target.src = imageErrorFallback;
  };

  return (
    <Card ref={ref} variant="elevation" elevation={8}>
      <CardActionArea onClick={openInFlickr}>
        <CardMedia
          className={classes.media}
          src={direct_link}
          component="img"
          title={title}
          onError={(e) => setImageFallback(e)}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.textEllipsis}
            title={title}
          >
            {title.trim() === '' ? <i>No title</i> : title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.textEllipsis}
          >
            Posted by&nbsp;
            <Link href={author.uri} target="blank">
              {author.name}
            </Link>
            &nbsp;at
            {published_at}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.textEllipsis}
            title={categories.join(', ')}
          >
            Categories:&nbsp;
            {categories.join('') ? categories.join(', ') : <i>Uncategorized</i>}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" href={flickr_link} target="blank">
          Open in Flickr
        </Button>
      </CardActions>
    </Card>
  );
});

SingleFeedsView.propTypes = {
  feed: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string,
      uri: PropTypes.string,
    }).isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    direct_link: PropTypes.string.isRequired,
    flickr_link: PropTypes.string.isRequired,
    published_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleFeedsView;
