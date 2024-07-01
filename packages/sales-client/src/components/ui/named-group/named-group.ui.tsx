import { INamedGroup } from '@/components/ui/named-group/named-group.interface';

export const NamedGroup = ({ title, children }: INamedGroup) => {
	return (
		<div className='flex flex-col gap-3'>
			<h3 className='text-lg font-medium'>{title}</h3>
			<div className='flex flex-col gap-4'>{children}</div>
		</div>
	);
};
