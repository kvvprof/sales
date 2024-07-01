import { HTMLProps } from 'react';

export interface IMiniButton extends HTMLProps<HTMLButtonElement> {
	type?: 'button' | 'submit' | 'reset';
}
