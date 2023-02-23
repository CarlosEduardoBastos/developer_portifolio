/* eslint-disable import/no-anonymous-default-export */
import { Meta, Story } from '@storybook/react/types-6-0';
import { Link, LinkProps } from '.';
export default {
  title: 'Link',
  component: Link,
  args: {
    text: 'Link',
    href: 'Link',
  }
}as Meta;

export const Template:Story<LinkProps> = (args) => {
  return (
    <div>
      <Link {...args} />
    </div>
  );
};
