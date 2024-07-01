import { ArrowPathIcon } from '@heroicons/react/24/outline';

import { ILoader } from '@/components/ui/loader/loader.interface';
import { cn } from '@/utils/cn/cn';

export const Loader = ({ size = 'large' }: ILoader) => {
	const setLoaderSize = () => {
		switch (size) {
			case 'small':
				return 'h-4 w-4';
			case 'medium':
				return 'h-5 w-5';
			case 'large':
				return 'h-7 w-7';
			default:
				return 'h-7 w-7';
		}
	};

	return <ArrowPathIcon className={cn('animate-spin', setLoaderSize())} />;
};
