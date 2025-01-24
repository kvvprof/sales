import { create } from 'zustand';

import { BasicUser } from '@/__types__/graphql';

interface IStore {
  user: BasicUser | null;
  setUser(user: BasicUser | null): void;
}

export const useUserStore = create<IStore>()((set) => ({
  user: null,

  setUser: (user) => set({ user }),
}));
