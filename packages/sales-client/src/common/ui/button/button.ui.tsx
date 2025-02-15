import { IButton } from '@/common/ui/button/button.interface';

import { cn } from '@/common/utils/cn/cn';

export const Button = ({
  buttonSize = 'm',
  type = 'button',
  className,
  children,
  ...props
}: IButton) => {
  return (
    <button
      className={cn(
        'bg-c-primary text-c-text-secondary flex items-center justify-center gap-2 rounded-md p-2 hover:opacity-80',
        buttonSize === 's' && 'p-1 text-xs',
        'disabled:cursor-not-allowed disabled:opacity-80',
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
