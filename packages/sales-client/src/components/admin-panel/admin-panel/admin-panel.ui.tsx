import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import { ContentLayout, Toolbar } from '@/common';
import { Banks } from '@/components/admin-panel/banks/banks.ui';
import { Managers } from '@/components/admin-panel/managers/managers.ui';
import { Subsidies } from '@/components/admin-panel/subsidies/subsidies.ui';

export const AdminPanel = () => {
  return (
    <ContentLayout title='Панель администратора'>
      <TabGroup className='flex flex-1 flex-col overflow-auto'>
        <Toolbar>
          <TabList className='flex gap-4'>
            <Tab className='data-[selected]:text-c-text-secondary data-[selected]:bg-c-primary flex items-center justify-center gap-2 rounded-md p-2'>
              Банки
            </Tab>
            <Tab className='data-[selected]:text-c-text-secondary data-[selected]:bg-c-primary flex items-center justify-center gap-2 rounded-md p-2'>
              Менеджеры
            </Tab>
            <Tab className='data-[selected]:text-c-text-secondary data-[selected]:bg-c-primary flex items-center justify-center gap-2 rounded-md p-2'>
              Субсидии
            </Tab>
          </TabList>
        </Toolbar>
        <TabPanels className='flex flex-1 overflow-auto'>
          <TabPanel className='flex-1'>
            <Banks />
          </TabPanel>
          <TabPanel className='flex-1'>
            <Managers />
          </TabPanel>
          <TabPanel className='flex-1'>
            <Subsidies />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </ContentLayout>
  );
};
