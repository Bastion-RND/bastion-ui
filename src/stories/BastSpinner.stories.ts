import type { Meta, StoryObj } from '@storybook/react';

import { BastSpinner as BastSpinnerComponent } from '../../lib/entities/BastSpinner';

const meta = {
  title: 'Example/BastSpinner',
  component: BastSpinnerComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof BastSpinnerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastSpinner: Story = {};