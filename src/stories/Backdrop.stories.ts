import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Backdrop as BackdropComponent } from '../../lib/shared/ui/backdrop';

const meta = {
  title: 'Utility/Backdrop',
  component: BackdropComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs', 'utility'],
  args: { show: true, onDismiss: fn },
} satisfies Meta<typeof BackdropComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Backdrop: Story = { args: { show: false } };
