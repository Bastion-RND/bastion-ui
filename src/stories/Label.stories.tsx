import { Meta, StoryObj } from '@storybook/react';

import { BastInput } from '../../lib/entities/BastInput';
import { withLabel } from '../../lib/shared/ui/hocs';
import { Label as LabelComponent } from '../../lib/shared/ui/label';

const LabelExample = () => {
  const Component = withLabel(BastInput);
  return <Component label='Label' subLabel='Sublabel' />;
};

const meta = {
  title: 'Utility/Label',
  component: LabelExample,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'utility'],
  args: {
    disabled: false,
  },
} satisfies Meta<typeof LabelComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Label: Story = { args: {  } };
