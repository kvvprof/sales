import { PlusIcon } from '@heroicons/react/24/outline';

import { ICardList } from '@/components/ui/card-list/card-list.interface';

export const CardList = ({
	children,
	error,
	showAddButton = true,
	onAdd,
}: ICardList) => {
	return (
		<div className='relative flex flex-col gap-2'>
			<div className='flex flex-wrap items-center gap-2'>
				{children}
				{showAddButton && (
					<button
						className='border-1 border-c-inactive text-c-text-muted hover:border-c-text-primary hover:text-c-text-primary flex h-7 w-7 items-center justify-center rounded-lg border-dashed'
						onClick={onAdd}
					>
						<PlusIcon className='h-3 w-3' />
					</button>
				)}
			</div>
			{error && (
				<p className='error-message absolute bottom-[-16px]'>{error}</p>
			)}
		</div>
	);
};
