import { screen } from '@testing-library/react';
import { Link } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Link />', () => {
  it('should render link', () => {
    renderTheme(<Link text='link' href='#'/>);
    expect(screen.getByRole('link', {name: "link"})).toBeInTheDocument()
  })
  ;it('should match snapshot', () => {
    const {container} = renderTheme(<Link text='link' href='#'/>);
    expect(container).toMatchSnapshot()
  });
});
