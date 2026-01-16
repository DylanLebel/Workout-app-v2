/**
 * Logger utility - Conditional logging based on environment
 * Only logs in development mode to reduce console noise in production
 */

const isDevelopment = process.env.NODE_ENV === 'development';

export const logger = {
  /**
   * Log informational messages (only in development)
   * @param {...any} args - Arguments to log
   */
  log: (...args) => {
    if (isDevelopment) {
      console.log(...args);
    }
  },

  /**
   * Log warning messages (only in development)
   * @param {...any} args - Arguments to log
   */
  warn: (...args) => {
    if (isDevelopment) {
      console.warn(...args);
    }
  },

  /**
   * Log error messages (always logged, even in production)
   * @param {...any} args - Arguments to log
   */
  error: (...args) => {
    console.error(...args);
    // TODO: Send to error tracking service like Sentry in production
  },

  /**
   * Log debug messages (only in development)
   * @param {...any} args - Arguments to log
   */
  debug: (...args) => {
    if (isDevelopment) {
      console.debug(...args);
    }
  }
};

export default logger;
