import { html, TemplateResult } from '@web-inmars/core';
import '../src/mars-badge.js';

export default {
  text: 'Atoms / Badge',
  component: 'mars-badge',
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
  <mars-badge
    style="--mars-badge-text-color: ${textColor || 'black'}"
    .text=${text}
    .counter=${counter}
  >
    ${slot}
  </mars-badge>
`;

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  text: 'My title',
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
  counter: 123456,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};

SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
