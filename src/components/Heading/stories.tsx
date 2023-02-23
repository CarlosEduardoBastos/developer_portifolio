/* eslint-disable import/no-anonymous-default-export */
import { Meta, Story } from '@storybook/react/types-6-0';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'helping companie build better, scalable software.',
  },
  argTypes: {
    children: { type: 'string' },
  },
}as Meta;

export const Template:Story<HeadingProps> = (args) => {
  return (
    <div style={{background: "#000"}}>
      <Heading {...args} />
    </div>
  );
};
