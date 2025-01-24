import { ReactNode } from 'react';

export interface ICardList {
  children: ReactNode;
  error?: string | null;
  showAddButton?: boolean;
  onAdd?(): void | null;
}
