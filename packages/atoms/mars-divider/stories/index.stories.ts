import { html, TemplateResult, ifDefined } from '@web-inmars/core';
import '../src/mars-divider.js';

export default {
  title: 'Atoms / Divider',
  component: 'mars-divider',
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  variant?: string;
}

const Template: Story<ArgTypes> = ({ variant = '' }: ArgTypes) => html`
  <div style="padding: 32px; background: #F0F0F8">
    <h2 class="light">Light Mode</h2>
    <p class="light">Lorem ipsum dolor sit amet</p>
    <mars-divider variant=${ifDefined(variant)}> </mars-divider>
  </div>
  <div style="padding: 32px; background: #212123">
    <h2 class="dark">Dark Mode</h2>
    <p class="dark">Lorem ipsum dolor sit amet</p>
    <mars-divider variant=${ifDefined(variant)} mode="dark"></mars-divider>
  </div>
`;

export const Example = Template.bind({});
