import { HTMLProps, ReactNode } from 'react';

export interface IForm extends Omit<HTMLProps<HTMLFormElement>, 'onSubmit'> {
  children: ReactNode;
  handleSubmit?(): void;
}
