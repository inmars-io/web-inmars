import { html, TemplateResult, ifDefined } from '@web-inmars/core';
import '../src/mars-button.js';

export default {
  title: 'Atoms / Button',
  component: 'mars-button',
  parameters: {
    docs: {
      description: {
        component: 'Some component _markdown_',
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
    },
    disabled: { control: 'boolean' },
    type: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: ['filled', 'outlined', 'text', 'elevated', 'tonal'],
      },
    },
    click: { action: 'clicked' },
    dblclick: { action: 'double clicked' },
    keydown: { action: 'key down' },
    keyup: { action: 'key up' },
    keypress: { action: 'key press' },
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
  slot?: TemplateResult;
  disabled?: boolean;
  type?: string;
  click: () => void;
  dblclick: () => void;
  keydown: () => void;
  keyup: () => void;
  keypress: () => void;
}

const Template: Story<ArgTypes> = ({
  value = 'Hello world',
  slot,
  variant = '',
  disabled,
  type = '',
  click,
  dblclick,
  keydown,
  keyup,
  keypress,
}: ArgTypes) => html`
  <div style="padding: 32px; background: #F0F0F8">
    <h2 class="light">Light Mode</h2>
    <mars-button
      .value=${value}
      variant=${ifDefined(variant)}
      mode="light"
      ?disabled=${disabled}
      type=${ifDefined(type)}
      @click=${click}
      @dblclick=${dblclick}
      @keydown=${keydown}
      @keyup=${keyup}
      @keypress=${keypress}
      >${slot}</mars-button
    >
  </div>
  <div style="padding: 32px; background: #212123">
    <h2 class="dark">Dark Mode</h2>
    <mars-button
      .value=${value}
      variant=${variant}
      mode="dark"
      ?disabled=${disabled}
      type=${type}
      @click=${click}
      @dblclick=${dblclick}
      @keydown=${keydown}
      @keyup=${keyup}
      @keypress=${keypress}
      >${slot}</mars-button
    >
  </div>
`;

export const Example = Template.bind({});
