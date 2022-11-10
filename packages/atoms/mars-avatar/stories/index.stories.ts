import { html, TemplateResult } from '@web-inmars/mars-core';
import '../src/mars-avatar.js';

export default {
  title: 'Atoms / MarsAvatar',
  component: 'mars-avatar',
  argTypes: {
    name: { control: 'text' },
    img: { control: 'text' },
    abbr: { control: 'text' },
    color: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  name?: string;
  img?: string;
  abbr?: string;
  color?: string;
}

const Template: Story<ArgTypes> = ({
  name = '',
  img = '',
  abbr = '',
  color = '',
}: ArgTypes) => html`
  <mars-avatar
    .name="${name}"
    .img="${img}"
    .abbr="${abbr}"
    .color="${color}"
  ></mars-avatar>
`;

export const Regular = Template.bind({});

export const CustomName = Template.bind({});
CustomName.args = {
  name: 'John Doe',
};

export const CustomAbbr = Template.bind({});
CustomAbbr.args = {
  abbr: 'JP',
};

export const CustomImg = Template.bind({});
CustomImg.args = {
  img: 'https://picsum.photos/200',
};
