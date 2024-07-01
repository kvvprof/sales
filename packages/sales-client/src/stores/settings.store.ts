import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { BasicObject } from '@/__types__/graphql';
import { IOption } from '@/components/ui/select/select.interface';

interface IStore {
	currentObject: IOption<BasicObject> | null;
	setCurrentObject(currentObject: IOption<BasicObject> | null): void;
}

export const useSettingsStore = create<IStore>()(
	persist(
		(set) => ({
			currentObject: null,

			setCurrentObject: (currentObject) => set({ currentObject }),
		}),

		{
			name: '@sales:settings',
			storage: createJSONStorage(() => localStorage),
		},
	),
);
