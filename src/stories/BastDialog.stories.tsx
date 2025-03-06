import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentProps, useEffect, useState } from 'react';

import { BastDialog as BastDialogComponent } from '../../lib/widgets/dialog';

const ExampleComponent = ({
  isOpen: isOpenFromProps,
  onClose,
  ...props
}: ComponentProps<typeof BastDialogComponent>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpenFromProps !== undefined) setIsOpen(isOpenFromProps);
  }, [isOpenFromProps]);

  return (
    <BastDialogComponent
      isOpen={isOpen && isOpenFromProps}
      {...props}
      onClose={() => {
        onClose?.();
        setIsOpen(false);
      }}
    />
  );
};

const meta = {
  title: 'Business/BastDialog',
  component: ExampleComponent,
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
export const BastDialog: Story = {
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
