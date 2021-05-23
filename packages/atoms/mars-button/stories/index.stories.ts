import { html, TemplateResult } from 'lit-html';

import '../mars-button.js';

export default {
  title: 'MarsButton',
  component: 'mars-button',
  argTypes: {
    onClick: { action: 'clicked' },
    value: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: ['secondary', 'border-line'],
      },
    },
    color: { control: 'color' },
    textColor: { control: 'color' },
    marsColor: {
      control: {
        type: 'select',
        options: ['coral', 'indigo'],
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
  value?: string;
  variant?: string;
  marsColor?: string;
  color?: string;
  textColor?: string;
  slot?: TemplateResult;
  onClick: any;
}

const Template: Story<ArgTypes> = ({
  value = 'Hello world',
  slot,
  color = '',
  variant = '',
  marsColor = '',
  textColor = '',
  onClick,
}: ArgTypes) => {
  return html`
    <mars-button
      .value=${value}
      .color=${color}
      mars-color=${marsColor}
      text-color=${textColor}
      .variant=${variant}
      @on-click=${onClick}
      >${slot}</mars-button
    >
  `;
};

export const Regular = Template.bind({});

export const CustomValue = Template.bind({});

CustomValue.args = {
  value: 'My value',
};

export const ButtonVariant = Template.bind({});

ButtonVariant.args = {
  variant: '',
};

export const MarsColor = Template.bind({});

MarsColor.args = {
  marsColor: 'indigo',
};

export const SelectColor = Template.bind({});

SelectColor.args = {
  color: 'red',
  textColor: 'white',
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<span>Slotted content</span>`,
};

SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
