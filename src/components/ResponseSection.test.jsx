import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ResponseSection from './ResponseSection.jsx';
import { CRISIS_MESSAGE } from '../crisisDetection.js';
import prompts from '../prompts.js';

const crisisResponse = [
  CRISIS_MESSAGE.title,
  CRISIS_MESSAGE.body,
  CRISIS_MESSAGE.resources.map((r) => `${r.label}: ${r.url}`).join('\n'),
  CRISIS_MESSAGE.closing
].join('\n\n');

const quoteResponse = [
  'QUOTE: You have the right to work, but never to the fruit of work.',
  'SOURCE: Bhagavad Gita 2:47',
  'REFERENCE_URL: https://www.holy-bhagavad-gita.org/chapter/2/verse/47',
  'CONTEXT: Krishna teaches Arjuna about acting without attachment to results.',
  'SUMMARY: Focus on your duty, not the outcome.'
].join('\n');

describe('ResponseSection', () => {
  it('renders nothing when there is no response', () => {
    const { container } = render(<ResponseSection response="" isLoading={false} />);
    expect(container.firstChild).toBeNull();
  });

  describe('crisis-aware response', () => {
    it('renders a support card, not parsed quotes', () => {
      render(<ResponseSection response={crisisResponse} isLoading={false} />);
      expect(screen.getByText(CRISIS_MESSAGE.title)).toBeInTheDocument();
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('renders real-world resource links', () => {
      render(<ResponseSection response={crisisResponse} isLoading={false} />);
      const links = screen.getAllByRole('link');
      expect(links.length).toBe(CRISIS_MESSAGE.resources.length);
      links.forEach((link) => {
        expect(link).toHaveAttribute('href');
        expect(link).toHaveAttribute('target', '_blank');
      });
    });

    it('does NOT show the humility disclaimer in crisis mode', () => {
      render(<ResponseSection response={crisisResponse} isLoading={false} />);
      expect(screen.queryByText(prompts.humilityDisclaimer)).not.toBeInTheDocument();
    });
  });

  describe('normal guidance response', () => {
    it('parses and renders the quote', () => {
      render(<ResponseSection response={quoteResponse} isLoading={false} selectedText="BHAGAVAD_GITA" />);
      expect(screen.getByText(/right to work/i)).toBeInTheDocument();
      expect(screen.getByText('Bhagavad Gita 2:47')).toBeInTheDocument();
    });

    it('shows the humility disclaimer when there is substantive content', () => {
      render(<ResponseSection response={quoteResponse} isLoading={false} />);
      expect(screen.getByText(prompts.humilityDisclaimer)).toBeInTheDocument();
    });
  });

  it('shows a loading state', () => {
    render(<ResponseSection response="" isLoading={true} />);
    expect(screen.getByText(/seeking divine wisdom/i)).toBeInTheDocument();
  });
});
