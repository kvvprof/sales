import { ReactNode } from 'react';

export interface IDropdownItem {
  name: string;
  type?: 'button' | 'submit' | 'reset';
  isDanger?: boolean;
  onClick: () => void;
}

export interface IDropdown {
  name?: string;
  children: ReactNode;
}
