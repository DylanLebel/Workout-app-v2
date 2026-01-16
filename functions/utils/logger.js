/**
 * Logger utility for Firebase Functions
 * Uses Firebase Functions logger for better integration with Cloud Logging
 */

const functions = require('firebase-functions');

module.exports = {
  /**
   * Log informational messages
   * @param {...any} args - Arguments to log
   */
  info: (...args) => {
    functions.logger.info(...args);
  },

  /**
   * Log warning messages
   * @param {...any} args - Arguments to log
   */
  warn: (...args) => {
    functions.logger.warn(...args);
  },

  /**
   * Log error messages
   * @param {...any} args - Arguments to log
   */
  error: (...args) => {
    functions.logger.error(...args);
  },

  /**
   * Log debug messages (only in non-production)
   * @param {...any} args - Arguments to log
   */
  debug: (...args) => {
    if (process.env.FUNCTIONS_EMULATOR === 'true' || process.env.NODE_ENV !== 'production') {
      functions.logger.debug(...args);
    }
  }
};
