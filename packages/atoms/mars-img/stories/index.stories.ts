import { html } from 'lit-element';
import { tagsFont, TemplateResult } from '@web-inmars/mars-core';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import '../mars-img.js';

export default {
  title: 'Atoms / MarsImg',
  component: 'mars-img',
  argTypes: {
    src: { control: 'text' },
    disabled: { control: 'boolean' },
    alt: { control: 'text' },
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
  src?: string;
  variant?: string;
  slot?: TemplateResult;
  disabled?: boolean;
  alt?: string;
}

const Template: Story<ArgTypes> = ({
  src = '',
  slot,
  variant = '',
  disabled,
  alt = '',
}: ArgTypes) => html`
  ${unsafeHTML(tagsFont)}
  <mars-img
    style="width:100%"
    .src=${src}
    variant=${variant}
    ?disabled=${disabled}
    alt=${alt}
    >${slot}</mars-img
  >
`;

export const Regular = Template.bind({});

export const CustomValue = Template.bind({});

CustomValue.args = {
  src: 'https://picsum.photos/200',
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<span>Slotted content</span>`,
};

SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
