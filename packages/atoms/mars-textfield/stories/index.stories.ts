import { html, TemplateResult } from '@web-inmars/mars-core';
import '../mars-textfield.js';

export default {
  title: 'Atoms / MarsTextfield',
  component: 'mars-textfield',
  argTypes: {
    onChage: { action: 'changed' },
    value: { control: 'text' },
    name: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    showCaption: { control: 'boolean' },
    caption: { control: 'text' },
    label: { control: 'text' },
    type: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
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
  name?: string;
  placeholder?: string;
  value?: string;
  variant?: string;
  onClick: any;
  disabled?: boolean;
  showCaption?: boolean;
  type?: string;
  caption?: string;
  label?: string;
}

const Template: Story<ArgTypes> = ({
  value = '',
  name = '',
  placeholder = 'Write something...',
  variant = '',
  onClick,
  disabled,
  type = '',
  caption = '',
  label = 'This is a label',
  showCaption = false,
}: ArgTypes) => html`
  <mars-textfield
    .value=${value}
    .name=${name}
    .placeholder=${placeholder}
    .caption=${caption}
    .label=${label}
    variant=${variant}
    @on-click=${onClick}
    ?disabled=${disabled}
    ?show-caption=${showCaption}
    type=${type}
  >
  </mars-textfield>
`;

export const Regular = Template.bind({});
