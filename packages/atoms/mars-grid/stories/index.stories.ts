import { html, TemplateResult } from 'lit-html';
import '../mars-grid.js';

export default {
  title: 'MarsGrid',
  component: 'mars-grid',
  argTypes: {
    inline: { control: 'boolean' },
    gridTemplate: { control: 'text' },
    gap: { control: 'text' },
    grid: { control: 'text' },
    justifyItems: { control: 'text' },
    alignItems: { control: 'text' },
    placeItems: { control: 'text' },
    justifyContent: { control: 'text' },
    alignContent: { control: 'text' },
    placeContent: { control: 'text' },
    gridAutoFlow: { control: 'text' },
    containerSize: { control: 'text' },
    gridSize: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  inline?: boolean;
  slot?: TemplateResult;
  gridTemplate?: string;
  gap?: string;
  grid?: string;
  justifyItems?: string;
  alignItems?: string;
  placeItems?: string;
  justifyContent?: string;
  alignContent?: string;
  placeContent?: string;
  gridAutoFlow?: string;
  containerSize?: string;
  gridSize?: string;
}

const Template: Story<ArgTypes> = ({
  inline = false,
  gridTemplate = '',
  gap = '',
  grid = '',
  justifyItems = '',
  alignItems = '',
  placeItems = '',
  justifyContent = '',
  alignContent = '',
  placeContent = '',
  gridAutoFlow = '',
  containerSize = '',
  gridSize = '',
  slot,
}: ArgTypes) => html`
  <mars-grid
    ?inline=${inline}
    grid=${grid}
    gap=${gap}
    grid-template=${gridTemplate}
    justify-items=${justifyItems}
    align-items=${alignItems}
    place-items=${placeItems}
    justify-content=${justifyContent}
    align-content=${alignContent}
    place-content=${placeContent}
    grid-auto-flow=${gridAutoFlow}
    grid-size=${gridSize}
    container-size=${containerSize}
  >
    ${slot}
  </mars-grid>
`;

export const Regular = Template.bind({});
Regular.args = {
  slot: html`<div grid-area="footer">Content 1</div>
    <div>Content 2</div>
    <div>Content 3</div>
    <div>Content 4</div>
    <div>Content 5</div>
    <div>Content 6</div>`,
};
