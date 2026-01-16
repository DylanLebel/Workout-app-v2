import React from 'react';
import { AlertTriangle } from 'lucide-react';

/**
 * ErrorBoundary - Catches JavaScript errors anywhere in the child component tree
 * Logs errors and displays a fallback UI instead of crashing the whole app
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    this.setState({
      error,
      errorInfo
    });

    // TODO: Send error to error reporting service like Sentry
    // logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
    // Optionally reload the page
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-red-500/20 rounded-full p-4">
                <AlertTriangle className="w-12 h-12 text-red-400" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white text-center mb-4">
              Oops! Something went wrong
            </h1>

            <p className="text-gray-300 text-center mb-6">
              We encountered an unexpected error. Don't worry, your data is safe.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-black/40 rounded-lg">
                <p className="text-red-400 text-sm font-mono mb-2">
                  {this.state.error.toString()}
                </p>
                <details className="text-gray-400 text-xs">
                  <summary className="cursor-pointer hover:text-white">
                    Stack trace
                  </summary>
                  <pre className="mt-2 overflow-auto">
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </details>
              </div>
            )}

            <button
              onClick={this.handleReset}
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
