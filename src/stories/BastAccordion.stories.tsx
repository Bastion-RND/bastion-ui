import type { Meta, StoryObj } from '@storybook/react';

import { BastAccordion as BastAccordionComponent } from '../../lib/entities/BastAccordion';

const meta = {
  title: 'Example/BastAccordion',
  component: BastAccordionComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    disabled: false,
    expanded: true,
    children: <div>Any content</div>,
    title: 'Accordion',
    initialExpanded: false,
  },
} satisfies Meta<typeof BastAccordionComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastAccordion: Story = { args: {} };
