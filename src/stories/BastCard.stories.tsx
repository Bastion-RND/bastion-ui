import type { Meta, StoryObj } from '@storybook/react';

import { BastCard as BastCardComponent } from '../../lib/entities/BastCard';
import src from './assets/cardImage.png';

const ExampleCard = () => (
  <BastCardComponent>
    <BastCardComponent.Image src={src} />
    <BastCardComponent.Title>
      <h3>Монодатчики</h3>
    </BastCardComponent.Title>
    <BastCardComponent.Content>КРАСИВЫЕ</BastCardComponent.Content>
  </BastCardComponent>
)

const meta = {
  title: 'Example/BastCard',
  component: ExampleCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof BastCardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastCard: Story = { args: {} };