import { IButton } from '@/components/ui/button/button.interface';

import { cn } from '@/utils/cn/cn';

export const Button = ({
	buttonSize = 'medium',
	type = 'button',
	className,
	children,
	...props
}: IButton) => {
	return (
		<button
			className={cn(
				'bg-c-primary text-c-text-secondary flex items-center justify-center gap-2 rounded-md p-2 hover:opacity-80',
				buttonSize === 'small' && 'p-1 text-xs',
				className,
			)}
			type={type}
			{...props}
		>
			{children}
		</button>
	);
};
