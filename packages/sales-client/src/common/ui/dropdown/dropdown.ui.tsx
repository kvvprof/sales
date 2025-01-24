import { ChevronDownIcon } from '@heroicons/react/24/outline';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

import { Button } from '@/common';
import {
  IDropdown,
  IDropdownItem,
} from '@/common/ui/dropdown/dropdown.interface';
import { cn } from '@/common/utils/cn/cn';

export const DropdownItem = ({
  name,
  type = 'button',
  isDanger = false,
  onClick,
}: IDropdownItem) => {
  return (
    <button
      className={cn(
        'hover:bg-c-bg-secondary flex items-center gap-2 rounded-lg p-2',
        isDanger && 'hover:text-c-danger',
      )}
      type={type}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export const Dropdown = ({
  name = 'Действия',
  children,
}: {
  Item?: typeof DropdownItem;
} & IDropdown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  const filterDropdownItems = (children: ReactNode): ReactNode[] => {
    return React.Children.toArray(children).filter(
      (child) => React.isValidElement(child) && child.type === DropdownItem,
    );
  };

  return (
    <div
      className='relative flex flex-col justify-end'
      ref={dropDownRef}
      onClick={() => setIsOpen((state) => !state)}
    >
      <Button>
        {name}
        <ChevronDownIcon className={cn('h-4 w-4', isOpen && 'rotate-180')} />
      </Button>
      {isOpen && (
        <div className='border-1 border-c-primary bg-c-bg-primary absolute right-0 top-[41px] z-20 flex w-max flex-col rounded-lg p-2'>
          {filterDropdownItems(children)}
        </div>
      )}
    </div>
  );
};

Dropdown.Item = DropdownItem;
