import { ReactNode } from 'react';

export interface IModal {
	children: ReactNode;
	title: string;
	isOpen: boolean;
	onClose(): void;
}
