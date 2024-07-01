import { IToolbar } from '@/components/ui/toolbar/toolbar.interface';

export const Toolbar = ({ children, text }: IToolbar) => {
	return (
		<div className='bg-c-bg-primary sticky top-0 z-10 flex items-center justify-between gap-2 pb-1'>
			{text && (
				<p className='bg-c-bg-secondary text-c-text-muted rounded-lg p-2'>
					{text}
				</p>
			)}
			{children}
		</div>
	);
};
