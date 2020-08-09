import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  media: {
    height: 'calc( 100vh - 400px )',
  },
  textEllipsis: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
});

const imageErrorFallback =
  'https://www.coraf.org/wp-content/themes/consultix/images/no-image-found-360x250.png';

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

  return (
    <Card ref={ref} variant={'elevation'} elevation={8}>
      <CardActionArea onClick={openInFlickr}>
        <CardMedia
          className={classes.media}
          src={direct_link}
          component="img"
          title={title}
          onError={(e) => (e.target.src = imageErrorFallback)}
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
            Posted by{' '}
            <Link href={author.uri} target="blank">
              {author.name}
            </Link>
            &nbsp;at {published_at}
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

export default SingleFeedsView;
