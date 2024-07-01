import { NavLink } from 'react-router-dom';

import { IHeaderLink } from '@/components/common/header/header.interface';

export const HeaderLink = ({ name, path }: IHeaderLink) => {
	const headerLinkBaseStyle = 'p-[6px] rounded-md hover:bg-c-bg-secondary';

	return (
		<NavLink
			className={({ isActive }) =>
				!isActive
					? headerLinkBaseStyle
					: headerLinkBaseStyle +
						' bg-c-primary text-c-text-secondary hover:bg-c-primary'
			}
			to={path}
		>
			{name}
		</NavLink>
	);
};
