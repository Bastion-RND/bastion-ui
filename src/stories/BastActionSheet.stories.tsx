import type { Meta, StoryObj } from '@storybook/react';

import { BastActionSheet as BastActionSheetComponent } from '../../lib/widgets/actionSheet';
import { BastButton } from '../../lib/entities/button';

const meta = {
  title: 'Business/BastActionSheet',
  component: BastActionSheetComponent,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
<BastActionSheet
  maxHeightPercent={80}
  isOpen={false}
  onClose={() => setIsOpen(false)}
>
  <BastButton onClick={() => setIsOpen(false)}>Закрыть</BastButton>
</BastActionSheet>;      
`,
      },
    },
  },
  tags: ['autodocs', 'business'],
  args: {
    children: <BastButton>Закрыть</BastButton>,
    initialHeightPercent: 50,
    isOpen: false,
    maxHeightPercent: 80,
  },
} satisfies Meta<typeof BastActionSheetComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastActionSheet: Story = {
  args: {
    maxHeightPercent: 90,
    initialHeightPercent: 50,
    isOpen: false,
  },
};
