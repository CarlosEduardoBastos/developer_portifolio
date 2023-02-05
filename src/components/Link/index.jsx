import P from 'prop-types';
import * as Styled from './styles';

export const Link = ({text, href}) => {
  return (
    <Styled.Container href={href}>
      {text}
    </Styled.Container>
  );
};

Link.propTypes = {
  text: P.string.isRequired,
  href: P.string.isRequired,
};
