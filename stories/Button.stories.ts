// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { TestButtonModule } from '@mya-controls/testButton';


import { TestButtonComponent } from '@mya-controls/testButton';

export default {
  title: 'Test/Button',
  component: TestButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [TestButtonModule],
    })],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TestButtonComponent> = (args: TestButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Destructive = Template.bind({});
Destructive.args = {
  label: 'Button',
};
