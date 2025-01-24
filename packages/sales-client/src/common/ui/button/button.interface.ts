import { HTMLProps } from 'react';

export interface IButton extends HTMLProps<HTMLButtonElement> {
  buttonSize?: 's' | 'm';
  type?: 'button' | 'submit' | 'reset';
}
