import { html, TemplateResult } from '@web-inmars/mars-core';
// import '@web-inmars/mars-awesome-solid/dist/index';
import '../mars-icon.js';

export default {
  title: 'Atoms / MarsIcon',
  component: 'mars-icon',
  argTypes: {
    type: { type: 'select', options: ['solid', 'regular', 'brands'] },
    name: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  type?: string;
  name?: string;
  width?: string;
  height?: string;
  variant?: string;
}

const Template: Story<ArgTypes> = ({ name = 'search' }: ArgTypes) => html`
  <mars-icon .name=${name}> </mars-icon>
`;

export const Regular = Template.bind({});
