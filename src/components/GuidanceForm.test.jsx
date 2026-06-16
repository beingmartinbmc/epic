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
