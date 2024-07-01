import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

import { ICard } from '@/components/ui/card/card.interface';
import { cn } from '@/utils/cn/cn';

export const Card = ({ children, linkTo = null, onClick, onDelete }: ICard) => {
	return (
		<div
			className={cn(
				'border-1 bg-c-bg-secondary relative flex flex-col gap-1 rounded-lg border-transparent',
				(linkTo || onClick) && 'hover:border-c-primary cursor-pointer',
			)}
			onClick={onClick}
		>
			{linkTo && !onClick ? (
				<Link className='px-2 py-3' to={linkTo}>
					{children}
				</Link>
			) : (
				<div className='px-2 py-3'>{children}</div>
			)}

			{onDelete && (
				<button className='hover:text-c-danger absolute right-1 top-1'>
					<XMarkIcon
						className='h-[10px] w-[10px]'
						onClick={(event) => {
							event.stopPropagation();
							onDelete();
						}}
					/>
				</button>
			)}
		</div>
	);
};
