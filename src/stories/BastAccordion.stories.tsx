import type { Meta, StoryObj } from '@storybook/react';

import { BastAccordion as BastAccordionComponent } from '../../lib/entities/accordion';

const meta = {
  title: 'Business/BastAccordion',
  component: BastAccordionComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'business'],
  args: {
    disabled: false,
    expanded: true,
    children: <div>Any content</div>,
    title: 'Accordion',
  },
} satisfies Meta<typeof BastAccordionComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastAccordion: Story = {
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
