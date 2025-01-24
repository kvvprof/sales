import { LeftPanelLink } from '@/components/layout/left-panel/left-panel-link.ui';

export const LeftPanel = () => {
  return (
    <div className='bg-c-bg-primary flex flex-col gap-4 rounded-md p-4'>
      <h3 className='text-center text-lg font-medium'>Создать</h3>
      <div className='flex flex-col gap-3'>
        <LeftPanelLink
          label='Клиент (физ. лицо)'
          path={'/client/individual/new'}
        />
        <LeftPanelLink
          label='Клиент (несоверш.)'
          path='/client/individual-minor/new'
        />
        <LeftPanelLink label='Клиент (юр. лицо)' path='/client/entity/new' />
        <div className='border-c-line-primary w-full border-b-[1px]'></div>
        <LeftPanelLink label='Контракт (ДДУ)' path='/client-contract/ddu/new' />
        <LeftPanelLink label='Контракт (ДКП)' path='/client-contract/dkp/new' />
        <div className='border-c-line-primary w-full border-b-[1px]'></div>
        <LeftPanelLink label='Агент' path='/real-estate-agent/new' />
        <LeftPanelLink label='Агентство' path='/agency/new' />
        <div className='border-c-line-primary w-full border-b-[1px]'></div>
        <LeftPanelLink
          label='Контракт (АН)'
          path='/agency-contract/real-estate-agency/new'
        />
        <LeftPanelLink
          label='Контракт (МиП)'
          path='/agency-contract/mip-agency/new'
        />
      </div>
    </div>
  );
};
