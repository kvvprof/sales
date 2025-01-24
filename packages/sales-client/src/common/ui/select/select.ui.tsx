import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useId, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { Loader } from '@/common/ui/loader/loader.ui';
import { IOption, ISelect } from '@/common/ui/select/select.interface';
import { cn } from '@/common/utils/cn/cn';

export const Select = <T extends Record<string, unknown>>({
  defaultSelected = null,
  options,
  placeholder,
  label,
  isAbsoluteListPosition = false,
  error,
  isLoading = false,
  onSelect,
  onDelete,
  loadOptions,
}: ISelect<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<IOption<T> | null>(null);
  const [optionsState, setOptionsState] = useState<IOption<T>[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [debouncedValue] = useDebounce(searchValue, loadOptions ? 500 : 300);
  const divRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const id = useId();

  const handleSelect = (selected: IOption<T>) => {
    setIsOpen(false);
    setSearchValue('');
    onSelect(selected);
    setSelectedValue(selected);
    inputRef.current?.focus();
  };

  const handleDelete = () => {
    setIsOpen(false);
    setSearchValue('');
    setSelectedValue(null);
    onDelete();
    inputRef.current?.focus();
  };

  useEffect(() => {
    setOptionsState(options);
  }, [options]);

  useEffect(() => {
    setSelectedValue(defaultSelected);
  }, [defaultSelected]);

  useEffect(() => {
    if (loadOptions && debouncedValue.trim() !== '') {
      setOptionsState([]);
      setIsOpen(true);
      loadOptions(debouncedValue);
    } else {
      setOptionsState(
        options.filter((option) =>
          option.name
            .toLowerCase()
            .startsWith(debouncedValue.trim().toLowerCase()),
        ),
      );
    }
  }, [debouncedValue]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearchValue('');
        inputRef.current?.focus();
      }
    };

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setSearchValue('');
        inputRef.current?.focus();
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

  return (
    <div className='relative flex flex-col' ref={divRef}>
      <div className='relative flex w-full flex-1 flex-col gap-1'>
        {label && (
          <label htmlFor={id} className='text-c-text-muted'>
            {label}
          </label>
        )}
        <input
          className={cn(
            'bg-c-bg-secondary w-full flex-1 cursor-pointer rounded-md py-2 pl-3 pr-7',
            selectedValue && 'placeholder:text-c-text-primary',
          )}
          id={id}
          ref={inputRef}
          placeholder={selectedValue?.name || placeholder}
          autoComplete='off'
          value={searchValue}
          onChange={(event) => {
            if (!loadOptions) {
              setIsOpen(true);
            } else {
              event.target.value === '' && setIsOpen(false);
            }
            setSearchValue(event.target.value);
          }}
          onClick={() => {
            if (!loadOptions) {
              setIsOpen((state) => !state);
            }
          }}
        />

        {searchValue || selectedValue ? (
          <button
            className={cn(
              'hover:text-c-danger absolute right-2 top-[36px] h-4 w-4',
              !label && isAbsoluteListPosition && 'top-[11px]',
            )}
            onClick={handleDelete}
          >
            <XMarkIcon className='h-4 w-4' />
          </button>
        ) : (
          <ChevronDownIcon
            className={cn(
              'absolute right-2 top-[36px] h-4 w-4 cursor-pointer',
              !label && isAbsoluteListPosition && 'top-[11px]',
              isOpen && 'rotate-180',
            )}
            onClick={() => {
              if (!loadOptions) {
                setIsOpen((state) => !state);
              }
            }}
          />
        )}
        {error && !isOpen && (
          <p className='error-message absolute bottom-[-15px] right-0'>
            {error}
          </p>
        )}
      </div>
      {isOpen && (
        <div
          className={cn(
            'border-1 bg-c-bg-primary mt-1 flex max-h-[130px] w-full flex-col overflow-auto rounded-lg p-2',
            isAbsoluteListPosition && 'absolute top-[62px] z-10',
            !label && 'top-[37px]',
          )}
        >
          {isLoading ? (
            <div className='flex justify-center'>
              <Loader size='small' />
            </div>
          ) : (
            !optionsState.length && (
              <p className='text-c-text-muted text-center text-xs font-light'>
                Данные не найдены
              </p>
            )
          )}
          {optionsState.map((option, index) => (
            <button
              className='hover:bg-c-bg-secondary rounded-lg p-2 text-left'
              key={index}
              onClick={() => handleSelect(option)}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
