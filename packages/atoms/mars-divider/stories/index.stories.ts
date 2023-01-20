import { html, TemplateResult } from '@web-inmars/core';
import '../src/mars-divider.js';

export default {
  text: 'Atoms / Divider',
  component: 'mars-divider',
  argTypes: {
    text: { control: 'text' },
    counter: { control: 'number' },
    textColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  text?: string;
  counter?: number;
  textColor?: string;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  text = 'Hello world',
  counter = 5,
  textColor,
  slot,
}: ArgTypes) => html`
  <mars-divider
    style="--mars-divider-text-color: ${textColor || 'black'}"
    .text=${text}
    .counter=${counter}
  >
    ${slot}
  </mars-divider>
`;

export const Regular = Template.bind({});
