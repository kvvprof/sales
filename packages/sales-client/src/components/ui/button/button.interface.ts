import { HTMLProps } from 'react';

export interface IButton extends HTMLProps<HTMLButtonElement> {
	buttonSize?: 'small' | 'medium';
	type?: 'button' | 'submit' | 'reset';
}
