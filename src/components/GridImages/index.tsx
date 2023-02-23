
import * as Styled from './styles';
import {SectionContainer} from '../SectionContainer'

import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridImages = () => {
  return (
    <SectionContainer>
      <Styled.Container>
        <Styled.Spense>
          <Styled.SpenseImageContent>
            <Styled.Image src="../../../public/Assets/Spense.png"/>
          </Styled.SpenseImageContent>
          <Styled.SpenseText>
            <Heading size='xmedium' as='h3'>Spence.com</Heading>
            <TextComponent>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type
            </TextComponent>
          </Styled.SpenseText>
        </Styled.Spense>
        <Styled.YelpCamp>
          <Styled.YelpCampImageContent>
            <Styled.Image src="../../../public/Assets/YelpCamp.png"/>
          </Styled.YelpCampImageContent>
          <Styled.YelpCampText>
            <Heading size='xmedium' as='h3'>YelpCamp.com</Heading>
            <TextComponent>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type
            </TextComponent>
          </Styled.YelpCampText>
        </Styled.YelpCamp>
      </Styled.Container>
    </SectionContainer>
    
  );
};
