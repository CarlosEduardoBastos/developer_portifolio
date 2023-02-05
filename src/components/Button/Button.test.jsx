import { screen } from '@testing-library/react';
import { Button } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Button />', () => {
  it('should render the bottan', () => {
    renderTheme(<Button>children</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should match snapchot', () => {
    const {container} = renderTheme(<Button>children</Button>);
    expect(container).toMatchSnapshot();
  });
});
