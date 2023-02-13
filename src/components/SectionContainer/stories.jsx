/* eslint-disable import/no-anonymous-default-export */
import { SectionContainer } from '.';
export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere fuga dolorum id corporis impedit deleniti
          illo, neque voluptatibus, debitis harum, natus quae modi expedita. Cupiditate molestias dignissimos itaque
          officiis nobis.
        </p>
      </div>
    ),
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
