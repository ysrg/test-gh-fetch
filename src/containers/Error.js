import React, { Component } from 'react';
import { logErrorToService } from '../utils/fn_helpers';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToService(error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        // We can render any fallback component here
        <div>
          <h4>Something went wrong while fetching your resource. Try again later.</h4>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
