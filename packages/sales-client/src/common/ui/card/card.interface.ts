import { ReactNode } from 'react';

export interface ICard {
  children: ReactNode;
  linkTo?: string | null;
  onClick?(): void;
  onDelete?(): void;
}
