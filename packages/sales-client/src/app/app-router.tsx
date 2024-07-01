import { Suspense, lazy } from 'react';
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';

import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { MainLayout } from '@/components/widgets/main-layout/main-layout.ui';
import { RequireAuth } from '@/components/widgets/require-auth/require-auth.ui';

const NewClientIndividualPage = lazy(
	() => import('@/pages/new-client-individual.page'),
);
const NewClientIndividualMinorPage = lazy(
	() => import('@/pages/new-client-individual-minor.page'),
);
const NewClientEntityPage = lazy(
	() => import('@/pages/new-client-entity.page'),
);
const ClientIndividualPage = lazy(
	() => import('@/pages/client-individual.page'),
);
const ClientIndividualMinorPage = lazy(
	() => import('@/pages/client-individual-minor.page'),
);
const ClientEntityPage = lazy(() => import('@/pages/client-entity.page'));
const ClientsPage = lazy(() => import('@/pages/clients.page'));

const NewDDUClientContractPage = lazy(
	() => import('@/pages/new-ddu-client-contract.page'),
);
const DDUClientContractPage = lazy(
	() => import('@/pages/ddu-client-contract.page'),
);
const NewDKPClientContractPage = lazy(
	() => import('@/pages/new-dkp-client-contract.page'),
);
const DKPClientContractPage = lazy(
	() => import('@/pages/dkp-client-contract.page'),
);
const ClientContractsPage = lazy(() => import('@/pages/client-contracts.page'));

const NewAgencyPage = lazy(() => import('@/pages/new-agency.page'));
const AgencyPage = lazy(() => import('@/pages/agency.page'));
const AgenciesPage = lazy(() => import('@/pages/agencies.page'));

const NewRealEstateAgencyContractPage = lazy(
	() => import('@/pages/new-real-estate-agency-contract.page'),
);
const NewMIPAgencyContractPage = lazy(
	() => import('@/pages/new-mip-agency-contract.page'),
);
const RealEstateAgencyContractPage = lazy(
	() => import('@/pages/real-estate-agency-contract.page'),
);
const MIPAgencyContractPage = lazy(
	() => import('@/pages/mip-agency-contract.page'),
);

const NewRealEstateAgentPage = lazy(
	() => import('@/pages/new-real-estate-agent.page'),
);
const RealEstateAgentPage = lazy(
	() => import('@/pages/real-estate-agent.page'),
);
const RealEstateAgentsPage = lazy(
	() => import('@/pages/real-estate-agents.page'),
);

const PaymentSchedulePage = lazy(() => import('@/pages/payment-schedule.page'));

const SignInPage = lazy(() => import('@/pages/sign-in.page'));
const SignInCallbackPage = lazy(() => import('@/pages/sign-in-callback.page'));

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
					element: <NewDDUClientContractPage />,
				},
				{
					path: 'client-contract/ddu/:id',
					element: <DDUClientContractPage />,
				},
				{
					path: 'client-contract/dkp/new',
					element: <NewDKPClientContractPage />,
				},
				{
					path: 'client-contract/dkp/:id',
					element: <DKPClientContractPage />,
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
					element: <NewMIPAgencyContractPage />,
				},
				{
					path: 'agency-contract/real-estate-agency/:id',
					element: <RealEstateAgencyContractPage />,
				},
				{
					path: 'agency-contract/mip-agency/:id',
					element: <MIPAgencyContractPage />,
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
					path: 'payment-schedule/:id',
					element: <PaymentSchedulePage />,
				},
			],
		},
		{
			path: '/sign-in',
			element: (
				<Suspense fallback={<BootLayout isFullScreen isLoading />}>
					<SignInPage />
				</Suspense>
			),
		},
		{
			path: '/sign-in/callback/:token',
			element: (
				<Suspense fallback={<BootLayout isFullScreen isLoading />}>
					<SignInCallbackPage />
				</Suspense>
			),
		},
	]);

	return <RouterProvider router={router} />;
};
