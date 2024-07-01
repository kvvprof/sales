import { IContainer } from '@/components/ui/container/container.interface';

export const Container = ({ children }: IContainer) => {
	return (
		<div className='flex w-full max-w-[800px] flex-col gap-[16px]'>
			{children}
		</div>
	);
};
