import { html, TemplateResult } from '@web-inmars/mars-core';
import '../src/mars-range.js';

export default {
  title: 'Atoms / Range',
  component: 'mars-range',
  parameters: {
    actions: {
      handles: ['range-input'],
    },
  },
  argTypes: {
    value: { control: 'text' },
    label: { control: 'text' },
    min: { control: 'text' },
    max: { control: 'text' },
    step: { control: 'text' },
    disabled: { control: 'boolean' },
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
  value?: string;
  label?: string;
  min?: string;
  max?: string;
  variant?: string;
  step?: string;
  disabled?: boolean;
}

const Template: Story<ArgTypes> = ({
  value = '',
  label = '',
  min = '',
  max = '',
  variant = '',
  step = '',
  disabled = false,
}: ArgTypes) => html`
  <mars-range
    .value=${value}
    .label=${label}
    .min=${min}
    .max=${max}
    .step=${step}
    .disabled=${disabled}
    variant=${variant}
  ></mars-range>
`;

export const Regular = Template.bind({});
Regular.args = {
  value: '20',
  label: 'Range',
  min: '1',
  max: '50',
  variant: '',
  step: '',
  disabled: false,
};
