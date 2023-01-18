import { html, TemplateResult } from '@web-inmars/core';
import '../src/mars-switch.js';

export default {
  title: 'Atoms / Switch',
  component: 'mars-switch',
  argTypes: {
    onChage: { action: 'changed' },
    value: { control: 'text' },
    name: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    showCaption: { control: 'boolean' },
    caption: { control: 'text' },
    label: { control: 'text' },
    id: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: ['outline', 'primary', 'secondary', 'tertiary', 'xs', 'sm'],
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
  checked?: boolean;
  value?: string;
  variant?: string;
  onClick: any;
  disabled?: boolean;
  showCaption?: boolean;
  caption?: string;
  label?: string;
  id?: string;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  slot,
  value = '',
  name = '',
  checked = false,
  variant = '',
  onClick,
  disabled,
  caption = '',
  id = 'regularLabel',
  label = 'This is a label',
  showCaption = false,
}: ArgTypes) => html`
  <mars-switch
    value=${value}
    name=${name}
    .checked=${checked}
    .caption=${caption}
    .label=${label}
    .id=${id}
    variant=${variant}
    @on-change=${onClick}
    ?disabled=${disabled}
    ?show-caption=${showCaption}
  >
    ${slot}
  </mars-switch>
`;

export const Regular = Template.bind({});

export const CustomValue = Template.bind({});
CustomValue.args = {
  label: 'My value',
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<span slot="label">Content slotted</span>`,
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
