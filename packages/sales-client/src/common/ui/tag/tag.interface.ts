import { HTMLProps, ReactNode } from 'react';

export interface ITag extends HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
  tagSize?: 's' | 'm';
}
