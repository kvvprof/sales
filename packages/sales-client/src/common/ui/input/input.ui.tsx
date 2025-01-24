import { ArrowUpRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { forwardRef, useId } from 'react';
import { Link } from 'react-router-dom';

import { IInput } from '@/common/ui/input/input.interface';
import { cn } from '@/common/utils/cn/cn';

export const Input = forwardRef<HTMLInputElement, IInput>(
  (
    { label, error, linkTo, className, showClearButton, onClear, ...props },
    ref,
  ) => {
    const id = useId();

    return (
      <div className='relative flex w-full flex-1 flex-col gap-1'>
        {label && (
          <label htmlFor={id} className='text-c-text-muted'>
            {label}
          </label>
        )}
        <input
          id={id}
          className={cn(
            'bg-c-bg-secondary rounded-md px-3 py-2 disabled:cursor-not-allowed',
            showClearButton && 'pr-7',
            className,
          )}
          maxLength={191}
          {...props}
          ref={ref}
        />
        {showClearButton && (
          <XMarkIcon
            className='hover:text-c-danger absolute right-2 top-[11px] h-4 w-4 cursor-pointer'
            onClick={onClear}
          />
        )}
        {linkTo && (
          <Link
            className='bg-c-primary text-c-text-secondary absolute bottom-[8.5px] right-2 flex items-center justify-center rounded-md p-1 hover:opacity-80'
            to={linkTo}
            target='_blank'
            tabIndex={-1}
          >
            <ArrowUpRightIcon className='h-3 w-3' />
          </Link>
        )}
        {error && (
          <p className='error-message absolute bottom-[-15px] right-0'>
            {error}
          </p>
        )}
      </div>
    );
  },
);
