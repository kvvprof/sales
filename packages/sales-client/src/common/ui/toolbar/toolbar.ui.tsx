import { Tag } from '@/common/ui/tag/tag.ui';
import { IToolbar } from '@/common/ui/toolbar/toolbar.interface';

export const Toolbar = ({ children, text }: IToolbar) => {
  return (
    <div className='bg-c-bg-primary sticky top-0 z-10 flex items-center justify-between gap-2 pb-1'>
      {text && <Tag>{text}</Tag>}
      {children}
    </div>
  );
};
