import { html } from 'lit-element';
import { tagsFont, TemplateResult } from '@web-inmars/mars-core';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import '../mars-link.js';

export default {
  title: 'Atoms / MarsLink',
  component: 'mars-link',
  argTypes: {
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    href: { control: 'text' },
    target: { control: 'text' },
    rel: { control: 'text' },
    type: { control: 'text' },
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
  href?: string;
  target?: string;
  rel?: string;
  type?: string;
}

const Template: Story<ArgTypes> = ({
  value = 'Hello world',
  slot,
  variant = '',
  disabled,
  href = '',
  target = '',
  rel = '',
  type = '',
}: ArgTypes) => html`
  ${unsafeHTML(tagsFont)}
  <mars-link
    style="width:100%"
    .value=${value}
    variant=${variant}
    ?disabled=${disabled}
    href=${href}
    target=${target}
    rel=${rel}
    type=${type}
    >${slot}</mars-link
  >
`;

export const Regular = Template.bind({});

export const CustomValue = Template.bind({});

CustomValue.args = {
  value: 'My value',
  href: 'https://marsgotta.com',
  target: '_blank',
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<span>Slotted content</span>`,
};

SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
