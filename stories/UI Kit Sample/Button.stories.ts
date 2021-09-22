// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { ButtonModule } from './button.module';


import { ButtonComponent } from './button.component';

export default {
  title: 'Design-System/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule],
    })],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'accent',
  label: 'Button',
};

export const Destructive = Template.bind({});
Destructive.args = {
  color: 'warn',
  label: 'Button',
};
