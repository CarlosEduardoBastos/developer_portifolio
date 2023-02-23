/* eslint-disable import/no-anonymous-default-export */
import { Meta, Story } from '@storybook/react/types-6-0';
import { GridContent } from '.';
export default {
  title: 'GridContent',
  component: GridContent,
  args: {
    children: 'GridContent',
  },
  argTypes: {
    children: { type: 'string' },
  },
}as Meta;

export const Template:Story = (args) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};
