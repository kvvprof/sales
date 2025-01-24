import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { RequireAdmin } from '@/components/auth/require-admin/require-admin.ui';
import { RequireAuth } from '@/components/auth/require-auth/require-auth.ui';
import { MainLayout } from '@/components/layout/main-layout/main-layout.ui';
import AdminPanelPage from '@/router/pages/admin-panel.page';
import AgenciesPage from '@/router/pages/agencies.page';
import AgencyPage from '@/router/pages/agency.page';
import ClientContractsPage from '@/router/pages/client-contracts.page';
import ClientEntityPage from '@/router/pages/client-entity.page';
import ClientIndividualMinorPage from '@/router/pages/client-individual-minor.page';
import ClientIndividualPage from '@/router/pages/client-individual.page';
import ClientsPage from '@/router/pages/clients.page';
import DduClientContractPage from '@/router/pages/ddu-client-contract.page';
import DkpClientContractPage from '@/router/pages/dkp-client-contract.page';
import EscrowAccountsHistoryPage from '@/router/pages/escrow-accounts-history.page';
import MipAgencyContractPage from '@/router/pages/mip-agency-contract.page';
import NewAgencyPage from '@/router/pages/new-agency.page';
import NewClientEntityPage from '@/router/pages/new-client-entity.page';
import NewClientIndividualMinorPage from '@/router/pages/new-client-individual-minor.page';
import NewClientIndividualPage from '@/router/pages/new-client-individual.page';
import NewDduClientContractPage from '@/router/pages/new-ddu-client-contract.page';
import NewDkpClientContractPage from '@/router/pages/new-dkp-client-contract.page';
import NewMipAgencyContractPage from '@/router/pages/new-mip-agency-contract.page';
import NewRealEstateAgencyContractPage from '@/router/pages/new-real-estate-agency-contract.page';
import NewRealEstateAgentPage from '@/router/pages/new-real-estate-agent.page';
import PaymentSchedulePage from '@/router/pages/payment-schedule.page';
import RealEstateAgencyActPage from '@/router/pages/real-estate-agency-act.page';
import RealEstateAgencyActsPage from '@/router/pages/real-estate-agency-acts.page';
import RealEstateAgencyContractPage from '@/router/pages/real-estate-agency-contract.page';
import RealEstateAgentPage from '@/router/pages/real-estate-agent.page';
import RealEstateAgentsPage from '@/router/pages/real-estate-agents.page';
import SignInCallbackPage from '@/router/pages/sign-in-callback.page';
import SignInPage from '@/router/pages/sign-in.page';
import TransferActPage from '@/router/pages/transfer-act.page';
import TransferActsPage from '@/router/pages/transfer-acts.page';

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <RequireAuth>
          <MainLayout />
        </RequireAuth>
      ),
      errorElement: <Navigate to={'/'} />,
      children: [
        {
          path: '/',
          element: <ClientContractsPage />,
        },
        {
          path: 'client/individual/new',
          element: <NewClientIndividualPage />,
        },
        {
          path: 'client/individual-minor/new',
          element: <NewClientIndividualMinorPage />,
        },
        {
          path: 'client/entity/new',
          element: <NewClientEntityPage />,
        },
        {
          path: 'client/individual/:id',
          element: <ClientIndividualPage />,
        },
        {
          path: 'client/individual-minor/:id',
          element: <ClientIndividualMinorPage />,
        },
        {
          path: 'client/entity/:id',
          element: <ClientEntityPage />,
        },
        {
          path: 'clients',
          element: <ClientsPage />,
        },
        {
          path: 'client-contract/ddu/new',
          element: <NewDduClientContractPage />,
        },
        {
          path: 'client-contract/ddu/:id',
          element: <DduClientContractPage />,
        },
        {
          path: 'client-contract/dkp/new',
          element: <NewDkpClientContractPage />,
        },
        {
          path: 'client-contract/dkp/:id',
          element: <DkpClientContractPage />,
        },
        {
          path: 'agency/new',
          element: <NewAgencyPage />,
        },
        {
          path: 'agency/:id',
          element: <AgencyPage />,
        },
        {
          path: 'agencies',
          element: <AgenciesPage />,
        },
        {
          path: 'agency-contract/real-estate-agency/new',
          element: <NewRealEstateAgencyContractPage />,
        },
        {
          path: 'agency-contract/mip-agency/new',
          element: <NewMipAgencyContractPage />,
        },
        {
          path: 'agency-contract/real-estate-agency/:id',
          element: <RealEstateAgencyContractPage />,
        },
        {
          path: 'agency-contract/mip-agency/:id',
          element: <MipAgencyContractPage />,
        },
        {
          path: 'real-estate-agent/new',
          element: <NewRealEstateAgentPage />,
        },
        {
          path: 'real-estate-agent/:id',
          element: <RealEstateAgentPage />,
        },
        {
          path: 'real-estate-agents',
          element: <RealEstateAgentsPage />,
        },
        {
          path: 'real-estate-agency/acts',
          element: <RealEstateAgencyActsPage />,
        },
        {
          path: 'real-estate-agency/act/:id',
          element: <RealEstateAgencyActPage />,
        },
        {
          path: 'payment-schedule/:id',
          element: <PaymentSchedulePage />,
        },
        {
          path: 'escrow-accounts-history',
          element: <EscrowAccountsHistoryPage />,
        },
        {
          path: 'transfer-acts',
          element: <TransferActsPage />,
        },
        {
          path: 'transfer-act/:id',
          element: <TransferActPage />,
        },
        {
          path: 'admin-panel',
          element: (
            <RequireAdmin>
              <AdminPanelPage />
            </RequireAdmin>
          ),
        },
      ],
    },
    {
      path: '/sign-in',
      element: <SignInPage />,
    },
    {
      path: '/sign-in/callback/:token',
      element: <SignInCallbackPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};
