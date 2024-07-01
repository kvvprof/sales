import { create } from 'zustand';

import { BasicAgency } from '@/__types__/graphql';

interface IStore {
	agency: BasicAgency | null;
	setAgency(agency: BasicAgency | null): void;
}

export const useAgencyStore = create<IStore>()((set) => ({
	agency: null,

	setAgency: (agency) => set({ agency }),
}));
