import { Meta, StoryObj } from '@storybook/react';

import { BastButton } from '../../lib/entities/button';
import { useVisualImpairedMode as useVisualImpairedModeHook } from '../../lib/features/toggleVisuallyImpairedMode';

const ExampleComponent = () => {
  const { toggleVisualImpairedMode } = useVisualImpairedModeHook();

  return (
    <BastButton color="gray" fill="filled" expand onClick={toggleVisualImpairedMode}>
      Toggle visually impaired mode
    </BastButton>
  );
};

const meta = {
  title: 'Hooks/useVisualImpairedMode',
  component: ExampleComponent,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
const { toggleVisualImpairedMode, isVisuallyImpairedMode } = useVisualImpairedMode();

return (
  <BastButton color="gray" fill="filled" expand onClick={toggleVisualImpairedMode}>
    Toggle visually impaired mode
  </BastButton>
);`,
      },
    },
  },
  tags: ['autodocs', 'business'],
} satisfies Meta<typeof ExampleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const useVisuallyImpairedMode: Story = {
  args: {},
  argTypes: {},
};
