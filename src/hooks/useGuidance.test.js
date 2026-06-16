import { describe, it, expect } from 'vitest';
import { resolveMode } from './useGuidance.js';
import prompts from '../prompts.js';

describe('resolveMode', () => {
  it('defaults to guidance for unknown/missing mode', () => {
    const result = resolveMode(undefined, 'BIBLE');
    expect(result.systemPrompt).toBe(prompts.system.prompt);
    expect(result.userPrompt).toBe(prompts.userPrompts.bible);
    expect(result.userPrefix).toBe("User's situation");
  });

  it('resolves guidance mode with the matching text template', () => {
    const result = resolveMode('guidance', 'QURAN');
    expect(result.systemPrompt).toBe(prompts.system.prompt);
    expect(result.userPrompt).toBe(prompts.userPrompts.quran);
  });

  it('resolves understand mode with the educational system prompt', () => {
    const result = resolveMode('understand', 'BHAGAVAD_GITA');
    expect(result.systemPrompt).toBe(prompts.understandSystem.prompt);
    expect(result.userPrompt).toBe(prompts.understandPrompts.bhagavadGita);
    expect(result.userPrefix).toBe("User's question");
  });

  it('resolves reflect mode with the contemplative system prompt', () => {
    const result = resolveMode('reflect', 'UPANISHADS');
    expect(result.systemPrompt).toBe(prompts.reflectSystem.prompt);
    expect(result.userPrompt).toMatch(/one passage/i);
    expect(result.userPrompt).toContain('UPANISHADS');
  });

  it('reflect mode omits a specific text when ALL is selected', () => {
    const result = resolveMode('reflect', 'ALL');
    expect(result.userPrompt).not.toContain('ALL');
    expect(result.userPrompt).toMatch(/one passage/i);
  });

  it('resolves socratic mode with the questioning system prompt', () => {
    const result = resolveMode('socratic', 'TALMUD');
    expect(result.systemPrompt).toBe(prompts.socraticSystem.prompt);
    expect(result.userPrompt).toMatch(/open questions/i);
    expect(result.userPrompt).toContain('TALMUD');
  });

  it('socratic mode omits a specific text when ALL is selected', () => {
    const result = resolveMode('socratic', 'ALL');
    expect(result.userPrompt).not.toContain('(ALL)');
  });
});
