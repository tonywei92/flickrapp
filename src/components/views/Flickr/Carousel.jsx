import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

// import swiper for carousel
import { Swiper, SwiperSlide } from 'swiper/react';

// import material-ui component
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';

// import internal component
import CenterContainer from 'components/UI/CenterContainer';
import SingleFeed from './SingleFeed';

import 'swiper/swiper.scss';

const compareChanges = (prevProps, nextProps) =>
  !(
    prevProps.feeds !== nextProps.feeds ||
    prevProps.loading !== nextProps.loading ||
    prevProps.error !== nextProps.error
  );

const FlickrCarousel = React.memo((props) => {
  const { feeds, loading = false, error } = props;
  if (error) {
    throw error;
  }
  const [controlledSwiper, setControlledSwiper] = useState({});
  const [activeSlide, setActiveSlide] = useState(1);
  const onPaginationChange = (e, page) => {
    controlledSwiper.slideTo(page - 1);
  };
  const slider = useMemo(() => {
    return (
      <Swiper
        effect="coverflow"
        spaceBetween={30}
        slidesPerView="auto"
        centeredSlides
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.activeIndex + 1);
        }}
        style={{ paddingTop: '20px', paddingBottom: '20px' }}
        onSwiper={setControlledSwiper}
      >
        {feeds.map((feed) => (
          <SwiperSlide key={feed.id} style={{ width: '80%' }}>
            <SingleFeed feed={feed} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }, [feeds]);
  if (feeds.length && loading === false) {
    return (
      <>
        {slider}
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            position: 'fixed',
            bottom: '20px',
          }}
        >
          <Pagination
            count={feeds.length}
            onChange={onPaginationChange}
            page={activeSlide}
            siblingCount={2}
            size="small"
          />
        </div>
      </>
    );
  }
  return (
    <CenterContainer>
      <CircularProgress />
    </CenterContainer>
  );
}, compareChanges);

FlickrCarousel.defaultProps = {
  feeds: [],
  error: {},
};

FlickrCarousel.propTypes = {
  feeds: PropTypes.arrayOf(PropTypes.object.isRequired),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
};

export default FlickrCarousel;
