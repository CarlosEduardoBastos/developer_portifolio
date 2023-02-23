
import { GridImages } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<GridImages />', () => {
  it('should match snapshot', () => {
    const {container} = renderTheme(<GridImages />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
