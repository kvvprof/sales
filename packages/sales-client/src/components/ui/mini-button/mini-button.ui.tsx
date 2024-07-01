import { IMiniButton } from '@/components/ui/mini-button/mini-button.interface';

import { cn } from '@/utils/cn/cn';

export const MiniButton = ({
	type = 'button',
	className,
	children,
	...props
}: IMiniButton) => {
	return (
		<button
			className={cn(
				'flex gap-2 bg-transparent text-xs hover:underline',
				className,
			)}
			type={type}
			{...props}
		>
			{children}
		</button>
	);
};
