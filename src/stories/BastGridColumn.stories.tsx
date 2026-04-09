import type { Meta, StoryObj } from '@storybook/react';

import { BastGrid as BastGridComponent } from '../../lib/entities/grid';

const meta = {
  title: 'Business/BastGridColumn',
  component: BastGridComponent.Column,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'business'],
} satisfies Meta<typeof BastGridComponent.Column>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastGridColumn: Story = {
  args: {
      size: undefined,
  },
  argTypes: {
      size: {
          control: 'object',
          defaultValue: undefined,
          description: [
              'Объект с адаптивными параметрами:',
              '- Ключи: "default", "sm", "md", "lg", "xl", "xxl"',
              '- Значения: числа 1-12, "auto" или "grow"',
              'Пример: { sm: 6, md: "auto", lg: 8 }'
          ].join('\n'),
          table: {
              defaultValue: { summary: undefined },
              type: {
                  summary: 'SizeConfig',
                  detail: '{ default?: ColumnSize; sm?: ColumnSize; md?: ColumnSize; lg?: ColumnSize; xl?: ColumnSize; xxl?: ColumnSize; }'
              }
          }
      },
  },
  render: ({size}) => (
    <BastGridComponent>
    <BastGridComponent.Column size={size} className="bgc-brand p-1 c-white">Колонка 1</BastGridComponent.Column>
    <BastGridComponent.Column size={{ default: 'auto' }} className="bgc-brand p-1 c-white">Колонка 2</BastGridComponent.Column>
    <BastGridComponent.Column size={{ default: 3 }} className="bgc-brand p-1 c-white">Колонка 3</BastGridComponent.Column>
    <BastGridComponent.Column size={{ default: 12 }} className="bgc-brand p-1 c-white">Колонка 4</BastGridComponent.Column>
  </BastGridComponent>
  ),
    parameters: {
        docs: {
            source: {
                code: `<BastGrid>
    <BastGrid.Column>Колонка 1</BastGrid.Column>
    <BastGrid.Column>Колонка 2</BastGrid.Column>
    <BastGrid.Column>Колонка 3</BastGrid.Column>
</BastGrid>`,
            },
        },
    }
};
