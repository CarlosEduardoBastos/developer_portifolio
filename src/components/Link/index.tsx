import * as Styled from './styles';

export type LinkProps = {
  text: string;
  href: string;
};

export const Link = ({text, href}: LinkProps) => {
  return (
    <Styled.Container href={href}>
      {text}
    </Styled.Container>
  );
};
