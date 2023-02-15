/* eslint-disable import/no-anonymous-default-export */
import { GridImages } from '.';
export default {
  title: 'GridImages',
  component: GridImages,
  
};

export const Template = (args) => {
  return (
    <div>
      <GridImages {...args} />
    </div>
  );
};
