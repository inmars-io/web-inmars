import { html, TemplateResult } from '@web-inmars/core';
import '../src/mars-icon.js';

export default {
  title: 'Atoms / Icon',
  component: 'mars-icon',
  argTypes: {
    name: { control: 'text' },
    color: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  name?: string;
  color?: string;
}

const Template: Story<ArgTypes> = ({
  name = 'search',
  color = 'inherit',
}: ArgTypes) => html`
  <div style="padding: 32px; background: #F0F0F8">
    <h2 class="light">Light Mode</h2>
    <mars-icon .name=${name} style="--mars-icon-color: ${color}"></mars-icon>
  </div>
  <div style="padding: 32px; background: #212123">
    <h2 class="dark">Dark Mode</h2>
    <mars-icon
      .name=${name}
      mode="dark"
      style="--mars-icon-color: ${color}"
    ></mars-icon>
  </div>
`;

export const Example = Template.bind({});
