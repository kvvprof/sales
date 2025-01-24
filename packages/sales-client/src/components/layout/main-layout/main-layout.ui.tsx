import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Header } from '@/components/layout/header/header.ui';
import { LeftPanel } from '@/components/layout/left-panel/left-panel.ui';
import { RightPanel } from '@/components/layout/right-panel/right-panel.ui';

export const MainLayout = () => {
  return (
    <div className='flex h-screen w-screen flex-col'>
      <ToastContainer
        position='top-right'
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
        theme='light'
      />
      <Header />
      <div className='mx-3 flex flex-1 gap-3 overflow-auto pb-4'>
        <LeftPanel />
        <div className='bg-c-bg-primary relative flex-1 overflow-auto rounded-md p-4'>
          <Outlet />
        </div>
        <RightPanel />
      </div>
    </div>
  );
};
