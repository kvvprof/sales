import { ReactNode } from 'react';

export interface IBootLayout {
	isLoading: boolean;
	isFullScreen?: boolean;
	children?: ReactNode;
}
