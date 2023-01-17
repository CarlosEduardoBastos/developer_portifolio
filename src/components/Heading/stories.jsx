/* eslint-disable import/no-anonymous-default-export */
import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'helping companie build better, scalable software.',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{background: "#000"}}>
      <Heading {...args} />
    </div>
  );
};
