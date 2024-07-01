import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface IStore {
	clientContractIds: number[];
	updateFavorites(id: number): void;
}

export const useFavoritesStore = create<IStore>()(
	persist(
		(set) => ({
			clientContractIds: [],

			updateFavorites: (id) =>
				set((state) => {
					if (!state.clientContractIds.includes(id)) {
						return {
							clientContractIds: [id, ...state.clientContractIds],
						};
					} else {
						return {
							clientContractIds: state.clientContractIds.filter(
								(clientContractId) => clientContractId !== id,
							),
						};
					}
				}),
		}),

		{
			name: '@sales:favorites',
			storage: createJSONStorage(() => localStorage),
		},
	),
);
