import { html, tagsFont, TemplateResult, unsafeHTML } from '@web-inmars/core';

import '../src/mars-img.js';

export default {
  title: 'Atoms / Img',
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
Regular.args = {
  src: 'https://picsum.photos/200',
};
