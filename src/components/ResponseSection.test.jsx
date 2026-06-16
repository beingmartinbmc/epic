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

  describe('free-form modes (Reflect / Ask Me)', () => {
    const socraticResponse = [
      'I hear your longing to contribute positively to the world.',
      'What does it mean to you personally to make the world better?',
      'How do your actions align with what you understand to be true?',
      'QUOTE: Let each examine their own actions first.',
      'SOURCE: Bhagavad Gita 3.9',
      'REFERENCE_URL: https://bhagavadgita.io/chapter/3/verse/9',
      'These questions are yours to live with.'
    ].join('\n');

    it('renders socratic prose instead of an empty screen', () => {
      const { container } = render(
        <ResponseSection response={socraticResponse} isLoading={false} mode="socratic" />
      );
      expect(container.querySelector('.freeform-response')).toBeInTheDocument();
      expect(screen.getByText(/what does it mean to you personally/i)).toBeInTheDocument();
      expect(screen.getByText(/these questions are yours to live with/i)).toBeInTheDocument();
    });

    it('surfaces a labeled quote and reference link in prose', () => {
      render(<ResponseSection response={socraticResponse} isLoading={false} mode="socratic" />);
      expect(screen.getByText(/let each examine their own actions/i)).toBeInTheDocument();
      const link = screen.getByRole('link', { name: /view reference/i });
      expect(link).toHaveAttribute('href', 'https://bhagavadgita.io/chapter/3/verse/9');
    });

    it('shows the humility disclaimer in free-form modes', () => {
      render(<ResponseSection response={socraticResponse} isLoading={false} mode="socratic" />);
      expect(screen.getByText(prompts.humilityDisclaimer)).toBeInTheDocument();
    });

    it('falls back to prose when guidance text has no parseable quotes', () => {
      const plain = 'Here is some reflective guidance with no structured quote fields at all.';
      const { container } = render(
        <ResponseSection response={plain} isLoading={false} mode="guidance" />
      );
      expect(container.querySelector('.freeform-response')).toBeInTheDocument();
      expect(screen.getByText(/reflective guidance with no structured quote/i)).toBeInTheDocument();
    });
  });
});
