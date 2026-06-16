import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import GuidanceForm from './GuidanceForm.jsx';

const baseProps = {
  userInput: '',
  setUserInput: vi.fn(),
  selectedText: 'ALL',
  onTextChange: vi.fn(),
  onSubmit: vi.fn((e) => e?.preventDefault?.()),
  isLoading: false,
  mode: 'guidance',
  onModeChange: vi.fn()
};

const renderForm = (overrides = {}) =>
  render(<GuidanceForm {...baseProps} {...overrides} />);

describe('GuidanceForm mode toggle', () => {
  it('renders all four modes', () => {
    renderForm();
    expect(screen.getByText('Seek Guidance')).toBeInTheDocument();
    expect(screen.getByText('Understand')).toBeInTheDocument();
    expect(screen.getByText('Reflect')).toBeInTheDocument();
    expect(screen.getByText('Ask Me')).toBeInTheDocument();
  });

  it('marks the active mode button', () => {
    renderForm({ mode: 'reflect' });
    expect(screen.getByText('Reflect').closest('button')).toHaveClass('active');
    expect(screen.getByText('Seek Guidance').closest('button')).not.toHaveClass('active');
  });

  it('calls onModeChange when a mode is clicked', () => {
    const onModeChange = vi.fn();
    renderForm({ onModeChange });
    fireEvent.click(screen.getByText('Ask Me'));
    expect(onModeChange).toHaveBeenCalledWith('socratic');
  });

  it('shows a mode-specific description for each mode', () => {
    const { rerender } = renderForm({ mode: 'reflect' });
    expect(screen.getByText(/single passage to sit with/i)).toBeInTheDocument();

    rerender(<GuidanceForm {...baseProps} mode="socratic" />);
    expect(screen.getByText(/questions a tradition might gently ask/i)).toBeInTheDocument();
  });
});

describe('GuidanceForm understand mode', () => {
  it('shows example verse chips for the selected text', () => {
    renderForm({ mode: 'understand', selectedText: 'BHAGAVAD_GITA' });
    expect(screen.getByText('Try a verse:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Bhagavad Gita 2:47' })).toBeInTheDocument();
  });

  it('fills the input when an example verse chip is clicked', () => {
    const setUserInput = vi.fn();
    renderForm({ mode: 'understand', selectedText: 'BIBLE', setUserInput });
    fireEvent.click(screen.getByRole('button', { name: 'John 3:16' }));
    expect(setUserInput).toHaveBeenCalledWith('John 3:16');
  });

  it('uses a verse-style placeholder in understand mode', () => {
    renderForm({ mode: 'understand', selectedText: 'QURAN' });
    expect(screen.getByPlaceholderText(/Quran 2:255/i)).toBeInTheDocument();
  });

  it('does NOT show verse chips in guidance mode', () => {
    renderForm({ mode: 'guidance', selectedText: 'BHAGAVAD_GITA' });
    expect(screen.queryByText('Try a verse:')).not.toBeInTheDocument();
  });
});
