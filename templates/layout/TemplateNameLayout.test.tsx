import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TemplateNameLayout from './TemplateNameLayout';

describe('<TemplateNameLayout />', () => {
  test('it should mount', () => {
    render(<TemplateNameLayout />);

    const templateName = screen.getByTestId('template_name-layout');
    expect(templateName).toBeInTheDocument();
  });
});
