import { logger } from './logger';

// Mock console methods
const originalEnv = process.env.NODE_ENV;

describe('logger utility', () => {
  let consoleLogSpy;
  let consoleWarnSpy;
  let consoleErrorSpy;
  let consoleDebugSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
    consoleDebugSpy = jest.spyOn(console, 'debug').mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
    consoleWarnSpy.mockRestore();
    consoleErrorSpy.mockRestore();
    consoleDebugSpy.mockRestore();
    process.env.NODE_ENV = originalEnv;
  });

  describe('in development mode', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'development';
    });

    it('should log messages', () => {
      logger.log('test message');
      expect(consoleLogSpy).toHaveBeenCalledWith('test message');
    });

    it('should log warnings', () => {
      logger.warn('test warning');
      expect(consoleWarnSpy).toHaveBeenCalledWith('test warning');
    });

    it('should log debug messages', () => {
      logger.debug('test debug');
      expect(consoleDebugSpy).toHaveBeenCalledWith('test debug');
    });
  });

  describe('in production mode', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'production';
    });

    it('should not log messages', () => {
      logger.log('test message');
      expect(consoleLogSpy).not.toHaveBeenCalled();
    });

    it('should not log warnings', () => {
      logger.warn('test warning');
      expect(consoleWarnSpy).not.toHaveBeenCalled();
    });

    it('should not log debug messages', () => {
      logger.debug('test debug');
      expect(consoleDebugSpy).not.toHaveBeenCalled();
    });
  });

  describe('error logging', () => {
    it('should always log errors in development', () => {
      process.env.NODE_ENV = 'development';
      logger.error('test error');
      expect(consoleErrorSpy).toHaveBeenCalledWith('test error');
    });

    it('should always log errors in production', () => {
      process.env.NODE_ENV = 'production';
      logger.error('test error');
      expect(consoleErrorSpy).toHaveBeenCalledWith('test error');
    });
  });
});
