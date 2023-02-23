
import { GridContent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<GridContent />', () => {
  it('should match snapshot', () => {
    const {container} = renderTheme(<GridContent />);
    expect(container.firstChild).toMatchSnapshot()
  });
});
