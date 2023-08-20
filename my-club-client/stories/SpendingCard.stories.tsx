// SpendingCard.stories.ts|tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ISpendingCard, {
  SpendingCardProps,
} from '../src/components/Cards/SpendingCard';

const meta: Meta<typeof ISpendingCard> = {
  title: 'components/cards/SpendingCard',
  component: ISpendingCard,
};

type Story = StoryObj<typeof ISpendingCard>;

export const SpendingCardExpense: Story = {
  args: {
    type: 'expense',
    datetime: new Date(),
    title: 'Mua cầu',
    note: 'Mua cầu Vinastar Mua cầu Vinastar Mua cầu Vinastar ',
    amount: '240,000đ',
  },
  argTypes: {
    type: {
      options: ['expense', 'income'],
      control: { type: 'radio' },
    },
  },
  render: (agrs: SpendingCardProps) => <ISpendingCard {...agrs} />,
};

export const SpendingCardIncome: Story = {
  args: {
    type: 'income',
    datetime: new Date(),
    title: 'Mua cầu',
    note: 'Mua cầu Vinastar Mua cầu Vinastar Mua cầu Vinastar ',
    amount: '240,000đ',
  },
  argTypes: {
    type: {
      options: ['expense', 'income'],
      control: { type: 'radio' },
    },
  },
  render: (agrs: SpendingCardProps) => <ISpendingCard {...agrs} />,
};

export default meta;
