import { getMuscleColor } from './helpers';

describe('helpers utility functions', () => {
  describe('getMuscleColor', () => {
    it('should return correct color for chest', () => {
      expect(getMuscleColor('chest')).toBe('bg-red-500');
    });

    it('should return correct color for back', () => {
      expect(getMuscleColor('back')).toBe('bg-blue-500');
    });

    it('should return correct color for legs', () => {
      expect(getMuscleColor('legs')).toBe('bg-green-500');
    });

    it('should return correct color for shoulders', () => {
      expect(getMuscleColor('shoulders')).toBe('bg-yellow-500');
    });

    it('should return correct color for arms', () => {
      expect(getMuscleColor('arms')).toBe('bg-purple-500');
    });

    it('should return correct color for core', () => {
      expect(getMuscleColor('core')).toBe('bg-orange-500');
    });

    it('should return default color for unknown muscle group', () => {
      expect(getMuscleColor('unknown')).toBe('bg-gray-500');
    });

    it('should be case insensitive', () => {
      expect(getMuscleColor('CHEST')).toBe('bg-red-500');
      expect(getMuscleColor('Back')).toBe('bg-blue-500');
    });

    it('should handle empty string', () => {
      expect(getMuscleColor('')).toBe('bg-gray-500');
    });

    it('should handle null/undefined', () => {
      expect(getMuscleColor(null)).toBe('bg-gray-500');
      expect(getMuscleColor(undefined)).toBe('bg-gray-500');
    });
  });
});
