import { Component } from 'react';
import './ErrorBoundary.css';

/**
 * Catches render-time errors anywhere in the child tree and shows a friendly
 * fallback instead of unmounting the whole app. Reloading recovers state.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('Unhandled UI error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary" role="alert">
          <h2>Something went wrong</h2>
          <p>
            An unexpected error occurred while rendering the page. Reloading
            usually fixes it.
          </p>
          <button
            type="button"
            className="error-boundary-btn"
            onClick={() => window.location.reload()}
          >
            Reload page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
