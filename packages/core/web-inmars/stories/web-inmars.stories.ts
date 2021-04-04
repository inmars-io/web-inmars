import { html, TemplateResult } from 'lit-html';
import '../web-inmars.js';

export default {
  title: 'WebInmars',
  component: 'web-inmars',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
  title = '',
  backgroundColor = 'white',
}: ArgTypes) => html`
  <web-inmars
    style="--web-inmars-background-color: ${backgroundColor}"
    .title=${title}
  ></web-inmars>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
