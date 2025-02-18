import type { Meta, StoryObj } from '@storybook/react';

import { BastInputGroup as BastInputGroupComponent } from '../../lib/widgets/BastInputGroup';

const meta = {
  title: 'Business/BastInputGroup',
  component: BastInputGroupComponent,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
<BastInputGroup>
  <BastInputGroup.Label htmlFor="2">Label</BastInputGroup.Label>
    <BastInputGroup.Input id="2" placeholder="Злодей" disabled={false} />
  <BastInputGroup.Feedback feedbackType="success">Test</BastInputGroup.Feedback>
</BastInputGroup>
`,
      },
    },
  },
  tags: ['autodocs', 'business'],
  args: {
    children: (
      <>
        <BastInputGroupComponent.Label htmlFor="2">Label</BastInputGroupComponent.Label>
        <BastInputGroupComponent.Input id="2" placeholder="Злодей" disabled={false} />
        <BastInputGroupComponent.Feedback feedbackType="success">Test</BastInputGroupComponent.Feedback>
      </>
    ),
  },
} satisfies Meta<typeof BastInputGroupComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastInputGroup: Story = {
  args: {},
  argTypes: {
    children: {
      control: 'object',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
};
