import type { Meta, StoryObj } from '@storybook/react';

import { Portal as PortalComponent } from '../../lib/shared/ui/portal';

const meta = {
  title: 'Utility/Portal',
  component: PortalComponent,
  parameters: {
    docs: {
      source: {
        code: `
<Portal>
  <div>Any content</div>
</Portal>`,
      },
    },
  },
  tags: ['autodocs', 'utility'],
  args: { children: <div>Any content</div> },
} satisfies Meta<typeof PortalComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Portal: Story = {};