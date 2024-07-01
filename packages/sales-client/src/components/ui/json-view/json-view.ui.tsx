import JSONPretty from 'react-json-pretty';

import { IJSONView } from '@/components/ui/json-view/json-view.interface';
import { Loader } from '@/components/ui/loader/loader';

export const JSONView = ({ data, isLoading = false }: IJSONView) => {
	return (
		<div className='bg-c-bg-secondary flex w-full overflow-auto rounded-lg'>
			<div className='p-4'>
				{isLoading ? (
					<Loader size='medium' />
				) : data ? (
					<JSONPretty
						id='json-pretty'
						data={data}
						keyStyle='font-weight: bold'
					/>
				) : (
					'Данные не найдены'
				)}
			</div>
		</div>
	);
};
