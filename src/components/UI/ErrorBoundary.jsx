import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorMessage: error };
  }

  // componentDidCatch(error, errorInfo) {
  //   // You can also log the error to an error reporting service
  //   // logErrorToMyService(error, errorInfo);
  // }

  render() {
    const { renderFallback, children } = this.props;
    const { hasError, errorMessage } = this.state;
    if (hasError) {
      return renderFallback(
        () => this.setState({ hasError: false }),
        errorMessage
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  renderFallback: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
