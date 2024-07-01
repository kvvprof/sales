import { CheckIcon } from '@heroicons/react/24/outline';
import { useId } from 'react';

import { ICheckbox } from '@/components/ui/checkbox/checkbox.interface';
import { cn } from '@/utils/cn/cn';

export const Checkbox = ({ label, error, checked, ...props }: ICheckbox) => {
	const id = useId();

	return (
		<div className='flex flex-col'>
			<div>
				<input className='hidden' id={id} type='checkbox' {...props} />
				<label htmlFor={id} className='flex cursor-pointer items-center gap-1'>
					<div
						className={cn(
							'border-1 border-c-primary h-4 w-4 rounded',
							checked && 'bg-c-primary',
						)}
					>
						{checked && (
							<CheckIcon
								className={cn(
									'text-c-primary h-[14px] w-[14px]',
									checked && 'text-c-text-secondary',
								)}
							/>
						)}
					</div>
					<span>{label}</span>
				</label>
			</div>
			{error && <p className='error-message text-sm text-red-500'>{error}</p>}
		</div>
	);
};
