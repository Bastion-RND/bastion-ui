import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { BastDialog, BastDialog as BastDialogComponent } from '../../lib/widgets/BastDialog';

const meta = {
  title: 'Business/BastDialog',
  component: BastDialog,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
<BastDialog
  isOpen
  color="gray"
  title="Диалог обычный"
  content="Важное сообщение и длинное сообщение..."
  onClose={() => {}}
/>;        
`,
      },
    },
  },
  tags: ['autodocs', 'business'],
  args: {
    isOpen: false,
    color: 'gray',
    title: 'Диалог обычный',
    content: 'Важное сообщение и длинное сообщение...',
    onClose: fn,
  },
} satisfies Meta<typeof BastDialogComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
export const BastToast: Story = {
  args: {},
  argTypes: {
    color: {
      control: 'select',
      options: ['brand', 'gray', 'success', 'warning', 'danger'],
      table: {
        type: { summary: 'brand | gray | success | warning | danger' },
      },
    },
  },
};
