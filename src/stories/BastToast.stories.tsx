import { Meta, StoryObj } from '@storybook/react';

import { BastButton } from '../../lib/entities/BastButton';
import { TToastItem, useToast } from '../../lib/widgets/BastToast';

const ExampleComponent = (props: TToastItem) => {
  const { createToast } = useToast();

  return (
    <BastButton color="gray" fill="filled" expand onClick={() => createToast(props)}>
      Make toast
    </BastButton>
  );
};

const meta = {
  title: 'Business/BastToast',
  component: ExampleComponent,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
  const { createToast } = useToast(); // Use this hook to make toast message

return (
  <BastButton
    ...
    onClick={() =>
    createToast({
      color: 'success',
      autoClose: false,
      text: 'Какое-то прикольное уведомление',
    })}
  >
    Make toast
  </BastButton>`,
      },
    },
  },
  tags: ['autodocs', 'business'],
  args: {},
} satisfies Meta<typeof ExampleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
export const BastToast: Story = {
  args: { color: 'success', autoClose: false, text: 'Toast text', duration: 5000 },
  argTypes: {
    color: {
      control: 'select',
      options: [ 'brand', 'gray', 'success', 'warning', 'danger'],
      table: {
        type: { summary: 'brand | gray | success | warning | danger' },
      },
    }
  },
};
