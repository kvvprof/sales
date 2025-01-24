import { ITag } from '@/common/ui/tag/tag.interface';
import { cn } from '@/common/utils';

export const Tag = ({ children, tagSize = 'm' }: ITag) => {
  return (
    <p
      className={cn(
        'bg-c-bg-secondary text-c-text-muted rounded-lg p-2',
        tagSize === 's' && 'rounded-[5px] p-1 text-[11px]',
      )}
    >
      {children}
    </p>
  );
};
