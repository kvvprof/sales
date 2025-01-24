import ReactPaginate from 'react-paginate';

import { IPagination } from '@/common/ui/pagination/pagination.interface';

export const Pagination = ({
  limit,
  totalCount,
  initialPage,
  onChange,
}: IPagination) => {
  return (
    <ReactPaginate
      className='mt-4 flex gap-2'
      breakLabel='...'
      initialPage={initialPage}
      onPageChange={onChange}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      pageCount={Math.ceil(totalCount / limit)}
      renderOnZeroPageCount={null}
      pageClassName='w-7 h-7 rounded-md'
      activeClassName='bg-c-primary text-c-text-secondary rounded-md hover:bg-c-bg-primary'
      activeLinkClassName='hover:bg-c-primary'
      pageLinkClassName='w-full h-full hover:bg-c-bg-secondary flex items-center 
				justify-center rounded-md'
      breakClassName='pagination__break'
      previousLabel={false}
      nextLabel={false}
    />
  );
};
