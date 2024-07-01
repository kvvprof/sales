import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

import { ILeftPanelLink } from '@/components/common/left-panel/left-panel-link.interface';

export const LeftPanelLink = ({ label, path }: ILeftPanelLink) => {
	const leftPanelLinkBaseStyle = 'flex gap-2 hover:underline items-center';

	return (
		<NavLink
			className={({ isActive }) =>
				!isActive
					? leftPanelLinkBaseStyle
					: leftPanelLinkBaseStyle + ' underline'
			}
			to={path}
		>
			<div className='flex items-center gap-1'>
				<PlusCircleIcon className='h-4 w-4' />
				{label}
			</div>
		</NavLink>
	);
};
