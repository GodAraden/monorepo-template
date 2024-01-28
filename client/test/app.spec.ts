import { describe, it, expect } from 'vitest';

describe('Client', () => {
  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect('Hello World!').toBe('Hello World!');
    });
  });
});
