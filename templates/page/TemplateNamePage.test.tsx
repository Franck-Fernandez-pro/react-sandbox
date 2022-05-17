import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TemplateNamePage from './TemplateNamePage';

describe('<TemplateNamePage />', () => {
  test('it should mount', () => {
    render(<TemplateNamePage />);

    const templateNamePage = screen.getByTestId('template_name-page');
    expect(templateNamePage).toBeInTheDocument();
  });
});
