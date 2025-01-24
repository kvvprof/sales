import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

import { ICard } from '@/common/ui/card/card.interface';
import { cn } from '@/common/utils/cn/cn';

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
        <Link className='px-2 py-3' to={linkTo} target='_blank'>
          {children}
        </Link>
      ) : (
        <div className='px-2 py-3'>{children}</div>
      )}

      {onDelete && (
        <button className='hover:text-c-danger absolute right-[2px] top-[2px]'>
          <XMarkIcon
            className='h-[12px] w-[12px]'
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
