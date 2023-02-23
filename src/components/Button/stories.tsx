/* eslint-disable import/no-anonymous-default-export */
import { Meta, Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '.';
export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Get in touch',
  },
  argTypes: {
    children: { type: 'string' },
  },
}as Meta;

export const Template:Story<ButtonProps> = (args) => {
  return (
    <div>
      <Button {...args} />
    </div>
  );
};
