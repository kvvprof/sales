import { HTMLProps } from 'react';

export interface IInput extends HTMLProps<HTMLInputElement> {
	label?: string;
	error?: string | null;
	linkTo?: string | null;
}
