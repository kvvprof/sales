import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import { ContentLayout, Toolbar } from '@/common';
import { RealEstateAgencyActCandidates } from '@/components/real-estate-agency-act/real-estate-agency-act-candidates/real-estate-agency-act-candidates.ui';
import { RealEstateAgencyActs } from '@/components/real-estate-agency-act/real-estate-agency-acts/real-estate-agency-acts.ui';

export const RealEstateAgencyActLayout = () => {
  return (
    <ContentLayout title='Акты агентств недвижимости'>
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
            <RealEstateAgencyActCandidates />
          </TabPanel>
          <TabPanel className='flex-1 overflow-auto'>
            <RealEstateAgencyActs />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </ContentLayout>
  );
};
