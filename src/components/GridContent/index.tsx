
import { Heading } from '../Heading';
import { SectionContainer } from '../SectionContainer';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const GridContent = () => {
  return (
    <SectionContainer>
      <Styled.Container>
        <Styled.Content>
          <Heading size='medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</Heading>
          <TextComponent>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
          </TextComponent>
          <TextComponent>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
          </TextComponent>
        </Styled.Content>
        <Styled.ContentText>
          <TextComponent>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </TextComponent>
          <TextComponent>
          of letters, as opposed to using 'Content here, content here'
          </TextComponent>
          <TextComponent>
          making it look like Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
           readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by 
          </TextComponent>
          <TextComponent>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin 
          </TextComponent>
        </Styled.ContentText>
      </Styled.Container>
    </SectionContainer>
  );
};

