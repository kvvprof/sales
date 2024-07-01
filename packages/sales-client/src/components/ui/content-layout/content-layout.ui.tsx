import { IContentLayout } from '@/components/ui/content-layout/content-layout.interface';

export const ContentLayout = ({ children, title }: IContentLayout) => {
	return (
		<div className='flex h-full flex-1 flex-col gap-3 overflow-hidden'>
			<h2 className='text-2xl font-medium'>{title}</h2>
			<div className='relative flex h-full flex-col gap-4 overflow-auto'>
				{children}
			</div>
		</div>
	);
};
