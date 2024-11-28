import { create } from 'zustand';
import { appStoreType } from 'types';
import { appStoreObj, initialState } from 'utils';
import zustandStorage from './zustandStorage';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Platform } from 'react-native';
import { isSubFN } from 'functions';

/**
* Local Storage,
* Store All Required Data On device Storage
**/
const useAppStore = create<appStoreType>()(
    persist((set) => ({
        ...appStoreObj,
        setUserData: by => set((state) => ({
            userData: {
                ...state.userData,
                ...by,
                lastChatChannelId: by?.lastChatChannelId?.trim() || null,
                lastChatAppliedDate: by?.lastChatChannelId?.trim().length === 0 ? null : (by?.lastChatAppliedDate || null),
                lastFilterAppliedDate: by?.lastFilterAppliedDate || null,
                searchHistory: state?.isSubscribed ? null : (by?.searchHistory || null),
            },
            isSubscribed: Platform.select({
                android: by?.isAndroidPurchase ?? false,
                ios: by?.isIosPurchase ?? false,
            })
        })),
        setIsLogin: by => set({ isLogin: by }),
        setIsVerifySignIn: by => set((state) => ({
            userData: { ...state?.userData, ...by },
            isVerifySignIn: true,
        })),
        setLogIn: (by) => set((state) => ({
            userData: {
                ...state.userData, ...by,
                searchHistory: isSubFN(by) ? null : (by?.searchHistory || null),
            },
            isLogin: true,
            isSubscribed: Platform.select({
                android: by?.isAndroidPurchase ?? false,
                ios: by?.isIosPurchase ?? false,
            }),
        })),
        setLogOut: () => set((state) => ({ ...initialState, showWelcomeModal: false, currentLocation: state?.currentLocation })),
        setDynamo: by => set({ dynamo: by }),
        setDynamoObj: (keyName, by) => set((state) => ({ dynamo: { ...state.dynamo, [keyName]: by } })),
        setCurrentLocation: by => set({ currentLocation: by }),
        setSubscription: by => set({ isSubscribed: by }),
        setUnReadMessageCount: by => set({ unReadMessageCount: by ? (by > 0 ? by : null) : null }),
        setShowWelcomeModal: by => set({ showWelcomeModal: by }),
        setMoments: by => set({ moments: by }),
        setFeedsObjByKey: (postID, by) => set((state) => ({ feeds: { ...state.feeds, [postID]: by } })),
        setFeeds: by => set((state) => ({ feeds: { ...state.feeds, ...by } })),
        setFeedsWithDynamoByKey: (stackUserID, dynamo, feeds) => set((state) => ({
            feeds: { ...state.feeds, ...feeds },
            dynamo: { ...state.dynamo, [stackUserID]: dynamo },
        })),
        setIsTopToScrollMomentsPost: () => set(state => ({ isTopToScrollMomentsPost: !state?.isTopToScrollMomentsPost }))
    }), {
        "name": '@TennisPalAppStore',
        "storage": createJSONStorage(() => zustandStorage),
        partialize: (state) => ({
            ...state,
            "activeChatChannelId": "",
            "unReadMessageCount": null,
            "feeds": {},
            "dynamo": {}
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