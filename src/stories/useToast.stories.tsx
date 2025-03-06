import { Meta, StoryObj } from '@storybook/react';

import { BastButton } from '../../lib/entities/button';
import { TToastItem, useToast as useToastHook } from '../../lib/widgets/toast';

const ExampleComponent = (props: TToastItem) => {
  const { createToast } = useToastHook();

  return (
    <BastButton color="gray" fill="filled" expand onClick={() => createToast(props)}>
      Make toast
    </BastButton>
  );
};

const meta = {
  title: 'Hooks/useToast',
  component: ExampleComponent,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
  const { createToast } = useToast(); // Use this hook to make toast message

return (
  <BastButton
    onClick={() =>
    createToast({
      color: 'success',
      autoClose: false,
      text: 'Какое-то прикольное уведомление'
    })}
  >
    Make toast
  </BastButton>`,
      },
    },
  },
  tags: ['autodocs', 'business'],
} satisfies Meta<typeof ExampleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
export const useToast: Story = {
  args: {
    color: 'success',
    autoClose: false,
    text: 'Какое-то прикольное уведомление',
    duration: 5000,
  },
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
