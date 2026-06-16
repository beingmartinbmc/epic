import { describe, it, expect } from 'vitest';
import { detectCrisis, CRISIS_MESSAGE } from './crisisDetection.js';

describe('detectCrisis', () => {
  describe('high-risk (crisis) detection', () => {
    const crisisInputs = [
      'I want to kill myself and end it all',
      'I have been thinking about killing myself',
      'I want to die, there is no point in living',
      'I feel suicidal lately',
      'I keep hurting myself when things get bad',
      'I have been cutting myself for weeks',
      'I just want to end the pain',
      "I can't go on anymore",
      'Everyone would be better off without me',
      "I don't want to be alive"
    ];

    it.each(crisisInputs)('flags crisis for: "%s"', (input) => {
      const result = detectCrisis(input);
      expect(result.isCrisis).toBe(true);
      expect(result.matched.length).toBeGreaterThan(0);
    });
  });

  describe('false-positive guarding', () => {
    const safeInputs = [
      'I am killing time before my meeting',
      'I could kill for a good cup of coffee',
      'That workout killed me, I am dead tired',
      'How do I deal with the death of a loved one?',
      'What does the Gita say about my duty at work?',
      'I want to live a more meaningful life',
      'I feel happy and grateful today'
    ];

    it.each(safeInputs)('does NOT flag crisis for: "%s"', (input) => {
      expect(detectCrisis(input).isCrisis).toBe(false);
    });
  });

  describe('softer distress detection', () => {
    it('flags distress without flagging crisis', () => {
      const result = detectCrisis('I feel so hopeless and worthless these days');
      expect(result.isDistress).toBe(true);
      expect(result.isCrisis).toBe(false);
    });

    it('treats "give up" as distress, not crisis', () => {
      const result = detectCrisis('Sometimes I just want to give up on everything');
      expect(result.isDistress).toBe(true);
      expect(result.isCrisis).toBe(false);
    });
  });

  describe('input hardening', () => {
    it('handles empty string', () => {
      expect(detectCrisis('')).toEqual({ isCrisis: false, isDistress: false, matched: [] });
    });

    it('handles null', () => {
      expect(detectCrisis(null)).toEqual({ isCrisis: false, isDistress: false, matched: [] });
    });

    it('handles undefined', () => {
      expect(detectCrisis(undefined)).toEqual({ isCrisis: false, isDistress: false, matched: [] });
    });

    it('handles non-string input', () => {
      expect(detectCrisis(42)).toEqual({ isCrisis: false, isDistress: false, matched: [] });
    });

    it('is case insensitive', () => {
      expect(detectCrisis('I WANT TO DIE').isCrisis).toBe(true);
    });
  });

  describe('CRISIS_MESSAGE', () => {
    it('leads with human warmth, not scripture', () => {
      expect(CRISIS_MESSAGE.title).toMatch(/not alone/i);
      expect(CRISIS_MESSAGE.body).toMatch(/safety/i);
    });

    it('provides actionable real-world resources with valid URLs', () => {
      expect(CRISIS_MESSAGE.resources.length).toBeGreaterThan(0);
      for (const resource of CRISIS_MESSAGE.resources) {
        expect(resource.label).toBeTruthy();
        expect(() => new URL(resource.url)).not.toThrow();
      }
    });
  });
});
