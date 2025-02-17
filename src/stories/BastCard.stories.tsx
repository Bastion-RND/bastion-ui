import type { Meta, StoryObj } from '@storybook/react';

import { BastCard as BastCardComponent } from '../../lib/entities/BastCard';
import src from './assets/cardImage.png';

const meta = {
  title: 'Example/BastCard',
  component: BastCardComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <BastCardComponent.Image src={src} />
        <BastCardComponent.Title>
          <h3>Монодатчики</h3>
        </BastCardComponent.Title>
        <BastCardComponent.Content>КРАСИВЫЕ</BastCardComponent.Content>
      </>
    ),
  },
} satisfies Meta<typeof BastCardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastCard: Story = { args: {} };
BastCard.parameters = {
  docs: {
    source: {
      code: `<BastCard>
  <BastCard.Image src={src} />
  <BastCard.Title>
    <h3>Монодатчики</h3>
  </BastCard.Title>
  <BastCard.Content>КРАСИВЫЕ</BastCard.Content>
</BastCard>`,
    },
  },
};
