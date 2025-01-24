import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import { ContentLayout, Toolbar } from '@/common';
import { TransferActCandidates } from '@/components/transfer-act/transfer-act-candidates/transfer-act-candidates.ui';
import { TransferActs } from '@/components/transfer-act/transfer-acts/transfer-acts.ui';

export const TransferActLayout = () => {
  return (
    <ContentLayout title='Акты приема-передачи'>
      <TabGroup className='flex flex-1 flex-col gap-3 overflow-auto'>
        <Toolbar>
          <TabList className='flex gap-4'>
            <Tab className='data-[selected]:text-c-text-secondary data-[selected]:bg-c-primary flex items-center justify-center gap-2 rounded-md p-2'>
              Кандидаты в акты
            </Tab>
            <Tab className='data-[selected]:text-c-text-secondary data-[selected]:bg-c-primary flex items-center justify-center gap-2 rounded-md p-2'>
              Акты
            </Tab>
          </TabList>
        </Toolbar>
        <TabPanels className='flex flex-1 overflow-auto'>
          <TabPanel className='flex-1 overflow-auto'>
            <TransferActCandidates />
          </TabPanel>
          <TabPanel className='flex-1 overflow-auto'>
            <TransferActs />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </ContentLayout>
  );
};
