/* eslint-disable import/no-anonymous-default-export */
import { Button } from '.';
export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Get in touch',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Button {...args} />
    </div>
  );
};
