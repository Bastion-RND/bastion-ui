import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentProps, useEffect, useState } from 'react';

import { BastButton } from '../../lib/entities/button';
import { BastIcon } from '../../lib/entities/icon';
import { BastModal as BastModalComponent } from '../../lib/widgets/modal';

const ExampleComponent = ({
  isOpen: isOpenFromProps,
  onClose,
  ...props
}: ComponentProps<typeof BastModalComponent>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpenFromProps !== undefined) setIsOpen(isOpenFromProps);
  }, [isOpenFromProps]);

  return (
    <BastModalComponent
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
  title: 'Business/BastModal',
  component: ExampleComponent,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
<BastModal isOpen={false} onClose={() => {}}>
  <BastModal.Header>
    <BastModal.Icon color="brand"> // Set color of icon here
      <BastIcon name="Bast" />
    </BastModal.Icon>
    <BastModal.Title>Какой-то важный текст</BastModal.Title>
  </BastModal.Header>
  <BastModal.Content>
    <div>Мы что-то важное хотим вам сказать</div>
  </BastModal.Content>
  <BastModal.Footer style={{ display: 'flex', gap: '.5em' }}>
    <BastButton expand fill="outlined" color="gray"> // Set color of button here
      Не согласен
    </BastButton>
    <BastButton expand>Согласен</BastButton>
  </BastModal.Footer>
</BastModal>;      
`,
      },
    },
  },
  tags: ['autodocs', 'business'],
  args: {
    isOpen: false,
    onClose: fn,
    backdropDismiss: false,
    size: '3xl',
    hideCloseButton: false,
    children: (
      <>
        <BastModalComponent.Header>
          <BastModalComponent.Icon color="brand">
            <BastIcon name="Bast" />
          </BastModalComponent.Icon>
          <BastModalComponent.Title>Какой-то важный текст</BastModalComponent.Title>
        </BastModalComponent.Header>
        <BastModalComponent.Content>
          <div>Мы что-то важное хотим вам сказать</div>
        </BastModalComponent.Content>
        <BastModalComponent.Footer style={{ display: 'flex', gap: '.5em' }}>
          <BastButton expand fill="outlined" color="gray">
            Не согласен
          </BastButton>
          <BastButton expand>Согласен</BastButton>
        </BastModalComponent.Footer>
      </>
    ),
  },
} satisfies Meta<typeof BastModalComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
export const BastModal: Story = {
  args: {},
  argTypes: {
    size: {
      control: 'select',
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        'full',
        'auto'
      ],
    },
  },
};
