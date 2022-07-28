import {
  html,
  unsafeHTML,
  tagsFont,
  TemplateResult,
} from '@web-inmars/mars-core';

import '../src/mars-text.js';

export default {
  title: 'Atoms / MarsText',
  component: 'mars-text',
  argTypes: {
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    tag: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'tertiary',
          'left',
          'right',
          'center',
          'unset',
          'inherit',
        ],
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
  slot?: TemplateResult;
  disabled?: boolean;
  tag?: string;
}

const Template: Story<ArgTypes> = ({
  value = 'Hello world',
  slot,
  variant = '',
  disabled,
  tag = 'p',
}: ArgTypes) => html`
  ${unsafeHTML(tagsFont)}
  <mars-text
    style="width:100%"
    .value=${value}
    variant=${variant}
    ?disabled=${disabled}
    tag=${tag}
    >${slot}</mars-text
  >
`;

export const Regular = Template.bind({});

export const CustomValue = Template.bind({});

CustomValue.args = {
  value: 'My value',
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<span>Slotted content</span>`,
};

SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
