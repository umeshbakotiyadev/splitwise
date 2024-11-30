import { create } from 'zustand';
import { appStoreType } from 'types';
import { appStoreObj, initialState } from 'utils';
import zustandStorage from './zustandStorage';
import { createJSONStorage, persist } from 'zustand/middleware';

/**
* Local Storage,
* Store All Required Data On device Storage
**/
const useAppStore = create<appStoreType>()(
    persist((set) => ({
        ...appStoreObj,
        setFriensListData: by => set((state) => ({
            firendsList: { ...state?.firendsList, ...by }
        })),
        setResetFriensListData: by => set({ firendsList: by }),
        setUserData: by => set({ userData: by }),
        setExpense: (by) => set((state) => ({ expenses: { ...state?.expenses, ...by } })),
        setResetExpenses: (by) => set({ expenses: by }),
        setLogin: (by) => set({ isLogin: by }),
        setGroupList: (by) => set((state) => ({ groupList: { ...state?.groupList, ...by } })),
        setResetGroupList: (by) => set({ groupList: by }),
    }), {
        "name": '@SplitWiseApp',
        "storage": createJSONStorage(() => zustandStorage),
        partialize: (state) => ({
            ...state,
        }),
        onRehydrateStorage: (_/* state */) => {
            return async (state, error) => {
                if (error) { console.log('zustandError:: an error happened during hydration', error); }
                // await RNBootSplash.hide({ fade: true, duration: 500 });
                // console.log('hydration finished, BootSplash has been hidden successfully');
            };
        }
    })
);

export default useAppStore;