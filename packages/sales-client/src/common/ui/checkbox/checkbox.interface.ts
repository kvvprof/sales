import { HTMLProps } from 'react';

export interface ICheckbox extends HTMLProps<HTMLInputElement> {
  label: string;
  error?: string | null;
}
