import { Meta, Story } from '@storybook/react/types-6-0';
import { GridImages } from '.';
export default {
  title: 'GridImages',
  component: GridImages,
  
}as Meta;

export const Template:Story = (args) => {
  return (
    <div>
      <GridImages {...args} />
    </div>
  );
};
