// Vitest global setup.
// Extends `expect` with jest-dom matchers (e.g. toBeInTheDocument)
// and clears mocks between tests.
import '@testing-library/jest-dom/vitest';
import { afterEach, vi } from 'vitest';

afterEach(() => {
  vi.clearAllMocks();
});
