import { html, unsafeHTML, tagsFont, TemplateResult } from '@web-inmars/core';

import '../src/mars-title.js';

export default {
  title: 'Atoms / Title',
  component: 'mars-title',
  argTypes: {
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    heading: { control: 'text' },
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
  heading?: string;
}

const Template: Story<ArgTypes> = ({
  value = 'Hello world',
  slot,
  variant = '',
  disabled,
  heading = '1',
}: ArgTypes) => html`
  ${unsafeHTML(tagsFont)}
  <mars-title
    style="width:100%"
    .value=${value}
    variant=${variant}
    ?disabled=${disabled}
    heading=${heading}
    >${slot}</mars-title
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
