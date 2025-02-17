import { Meta, StoryObj } from '@storybook/react';

import { BastInput } from '../../lib/entities/BastInput';
import { withLabel } from '../../lib/shared/ui/hocs';

const ComponentWithLabel = withLabel(BastInput);

const meta = {
  title: 'Utility/Label',
  component: ComponentWithLabel,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
const ComponentWithLabel = withLabel(ComponentWithLabel);
        
...
        
<ComponentWithLabel disabled={false} labelPosition='top' label='Label' subLabel='Sublabel'  />`
      }
    }
  },
  tags: ['autodocs', 'utility'],
  args: {
    disabled: false,
    labelPosition: 'top',
    label: 'Label',
    subLabel: 'Sublabel',
  },
} satisfies Meta<typeof ComponentWithLabel>;

export default meta;
type Story = StoryObj<typeof meta>;
export const LabelVertical: Story = {
  args: {},
  argTypes: {
    labelPosition: {
      control: 'select',
      options: ['top', 'right'],
      table: {
        type: { summary: 'top | right' },
      },
    },
  },
};
