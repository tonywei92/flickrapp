import React from 'react';
import PropTypes from 'prop-types';

const style = {
  width: '100%',
  flexDirection: 'column',
  height: 'calc( 100% - 64px )',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const CenterContainer = (props) => {
  const { children, ...rest } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div style={style} {...rest}>
      {children}
    </div>
  );
};

CenterContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CenterContainer;
