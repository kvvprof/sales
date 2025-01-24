import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '@/common/ui/card/card.ui';
import { CardList } from '@/common/ui/card-list/card-list.ui';

const meta = {
  title: 'Main/CardList',
  component: CardList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: [
      <Card>Карточка 1</Card>,
      <Card>Карточка 2</Card>,
      <Card>Карточка 3</Card>,
    ],
    showAddButton: true,
    error: null,
    onAdd: () => null,
  },
};
