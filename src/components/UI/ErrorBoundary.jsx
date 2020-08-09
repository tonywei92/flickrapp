import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorMessage: error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { hasError, errorMessage } = this.state;
    if (hasError) {
      return this.props.renderFallback(
        () => this.setState({ hasError: false }),
        errorMessage
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
