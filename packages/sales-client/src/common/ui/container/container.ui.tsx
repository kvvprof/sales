import { IContainer } from '@/common/ui/container/container.interface';

export const Container = ({ children }: IContainer) => {
  return (
    <div className='flex w-full max-w-[900px] flex-col gap-[16px]'>
      {children}
    </div>
  );
};
