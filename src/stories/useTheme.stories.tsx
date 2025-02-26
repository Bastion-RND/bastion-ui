import { Meta, StoryObj } from '@storybook/react';

import { BastButton } from '../../lib/entities/BastButton';
import { useTheme as useThemeHook } from '../../lib/features/toggleTheme';

const ExampleComponent = () => {
  const { toggleTheme } = useThemeHook();

  return (
    <BastButton color="gray" fill="filled" expand onClick={toggleTheme}>
      Toggle theme
    </BastButton>
  );
};

const meta = {
  title: 'Hooks/useTheme',
  component: ExampleComponent,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
  const { toggleTheme, theme } = useTheme();

  return (
    <BastButton color="gray" fill="filled" expand onClick={toggleTheme}>
      Toggle theme
    </BastButton>
  );
)`,
      },
    },
  },
  tags: ['autodocs', 'business'],
} satisfies Meta<typeof ExampleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const useTheme: Story = {
  args: {},
  argTypes: {},
};
