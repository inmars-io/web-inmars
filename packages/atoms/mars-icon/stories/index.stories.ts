import { html, TemplateResult } from '@web-inmars/mars-core';
import '../src/mars-icon.js';

export default {
  title: 'Atoms / Icon',
  component: 'mars-icon',
  argTypes: {
    name: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  name?: string;
}

const Template: Story<ArgTypes> = ({ name = 'search' }: ArgTypes) => html`
  <mars-icon .name=${name}> </mars-icon>
`;

export const Regular = Template.bind({});
