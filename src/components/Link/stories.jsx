/* eslint-disable import/no-anonymous-default-export */
import { Link } from '.';
export default {
  title: 'Link',
  component: Link,
  args: {
    text: 'Link',
    href: 'Link',
  }
};

export const Template = (args) => {
  return (
    <div>
      <Link {...args} />
    </div>
  );
};
