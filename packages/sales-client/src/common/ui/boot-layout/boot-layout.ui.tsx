import { IBootLayout } from '@/common/ui/boot-layout/boot-layout.interface';
import { Loader } from '@/common/ui/loader/loader.ui';
import { cn } from '@/common/utils/cn/cn';

export const BootLayout = ({
  children,
  isLoading = true,
  isFullScreen = false,
}: IBootLayout) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center overflow-hidden',
        isFullScreen ? 'h-screen w-screen' : 'h-full w-full',
      )}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div className='flex h-full w-full flex-col overflow-auto'>
          {children}
        </div>
      )}
    </div>
  );
};
