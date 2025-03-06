import type { Meta, StoryObj } from '@storybook/react';

import { BastAccordion } from '../../lib/entities/accordion';
import { BastAccordionGroup as BastAccordionGroupComponent } from '../../lib/widgets/accordionGroup';

const meta = {
  title: 'Business/BastAccordionGroup',
  component: BastAccordionGroupComponent,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
<BastAccordionGroup
  multiple
>
  <BastAccordion
    disabled
    title="AccordionGroup"
  >
    <div>
      Accordion content 1
    </div>
  </BastAccordion>
  <BastAccordion title="Accordion 2">
    <div>
      Accordion content 2
    </div>
  </BastAccordion>
  <BastAccordion title="Accordion 3">
    <div>
      Accordion content 3
    </div>
  </BastAccordion>
</BastAccordionGroup>
`
      }
    }
  },
  tags: ['autodocs', 'business'],
  args: {
    disabled: false,
    children: (
      <>
        <BastAccordion title="AccordionGroup" disabled>
          <div>Accordion content 1</div>
        </BastAccordion>
        <BastAccordion title="Accordion 2">
          <div>Accordion content 2</div>
        </BastAccordion>
        <BastAccordion title="Accordion 3">
          <div>Accordion content 3</div>
        </BastAccordion>
      </>
    ),
    multiple: true,
  },
} satisfies Meta<typeof BastAccordionGroupComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastAccordionGroup: Story = {
  args: {},
  argTypes: {
    children: {
      control: 'object',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
};
