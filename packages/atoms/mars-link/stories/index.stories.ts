import {
  html,
  unsafeHTML,
  tagsFont,
  TemplateResult,
} from '@web-inmars/mars-core';

import '../src/mars-link.js';

export default {
  title: 'Atoms / Link',
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
Regular.args = {
  value: 'My value',
  href: 'https://marsgotta.com',
  target: '_blank',
};
