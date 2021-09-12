import { html, TemplateResult } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import '../mars-grid.js';

export default {
  title: 'Atoms / MarsGrid',
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
    grid-template=${ifDefined(gridTemplate)}
    justify-items=${ifDefined(justifyItems)}
    align-items=${ifDefined(alignItems)}
    place-items=${ifDefined(placeItems)}
    justify-content=${ifDefined(justifyContent)}
    align-content=${ifDefined(alignContent)}
    place-content=${ifDefined(placeContent)}
    grid-auto-flow=${ifDefined(gridAutoFlow)}
    grid-size=${ifDefined(gridSize)}
    container-size=${ifDefined(containerSize)}
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
