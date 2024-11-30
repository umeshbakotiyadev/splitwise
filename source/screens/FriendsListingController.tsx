import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ButtonX, FriendsItem, MasterView, PressX, ScrLoader, TextX, ViewX } from 'components'
import { useAPI, useThemeX } from 'hooks'
import { getRandomImgFN, getRandomNumFN, LOG, makeFriendsListForLocalStoreFN } from 'functions'
import { firendsListItemType, StackProps, ToastType } from 'Types'
import useAppStore from 'store'
import { bSpace } from 'utils'
import { ADD_FRIENDS_IC } from 'assets'

const FriendsListingController = ({ navigation, route }: StackProps<'FriendsListingScr'>) => {

    const { getFriendsListAPI } = useAPI();
    const { firendsList, userData } = useAppStore();
    const { col, cpSty, str, friListSty, } = useThemeX();

    const [toast, setToast] = useState<ToastType>({});
    const [topLoading, setTopLoading] = useState<boolean>(false);
    const [bottomLoading, setBottomLoading] = useState<boolean>(false);
    const [scrLoading, setScrLoading] = useState<boolean>(true);
    const [abLoader, setABLoader] = useState<boolean>(false);

    const flatListRef = useRef<FlatList<any>>(null);
    const hasNextPageRef = useRef<boolean>(true);

    const firendsListArr = useMemo((): Array<firendsListItemType> => {
        return Object.values(firendsList).filter((item) => userData?.email !== item?.email).reverse();
    }, [firendsList, userData]);

    async function getFriendsList({ topRefresh = false, bottomRefresh = false }
        : { topRefresh?: boolean, bottomRefresh?: boolean; }) {

        if (bottomRefresh) setBottomLoading(true);
        if (topRefresh) {
            hasNextPageRef.current = true;
            setTopLoading(true);
        }
        if (!hasNextPageRef.current) return;

        getFriendsListAPI().then(({ res }) => {
            hasNextPageRef.current = !!(res?.next);
            if (Array.isArray(res?.data)) {
                const data = res?.data;
                LOG(makeFriendsListForLocalStoreFN(data))
                /** TEMPORARY COMMENTED **/
                // setFriensListData(makeFriendsListForLocalStoreFN(data));
            }
            setBottomLoading(false); setTopLoading(false); setScrLoading(false);
        }).finally(() => {
            setBottomLoading(false); setTopLoading(false); setScrLoading(false);
        });
    }

    function gotoExpneseScrFN(item: firendsListItemType) {
        navigation.navigate("ExpenseListingScr", {
            isGroup: false, scrName: item?.name,
            friends: { [item?.email ?? ""]: item, [userData?.email ?? ""]: firendsList[item?.email ?? ""] },
        });
    }

    const renderItem = useCallback(({ item, index }: { item: firendsListItemType, index: number }) => {
        return (<FriendsItem {...item} onPress={() => gotoExpneseScrFN(item)} />);
    }, [firendsList, gotoExpneseScrFN]);

    useEffect(() => {
        getFriendsList({ topRefresh: true });
    }, []);

    return (
        <MasterView fixed hShow={false} >
            <FlatList
                ref={flatListRef} refreshing
                renderItem={renderItem}
                data={firendsListArr}
                contentContainerStyle={{ paddingVertical: bSpace }}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <ViewX h={bSpace / 2} />}
                refreshControl={<RefreshControl
                    refreshing={topLoading}
                    colors={[col.PRIMARY, col.PRIMARY]}
                    onRefresh={() => {
                        getFriendsList({ topRefresh: true });
                    }}
                />}
                onEndReached={() => {
                    if (!hasNextPageRef.current || bottomLoading || topLoading || firendsListArr?.length < 10) return;
                    getFriendsList({ topRefresh: false, bottomRefresh: true });
                }}
                ListFooterComponent={() => {
                    return (bottomLoading && firendsListArr?.length > 0) ? <ViewX pV={30} >
                        <ScrLoader loading={bottomLoading} absolute={false} />
                    </ViewX> : null;
                }}
                ListEmptyComponent={() => {
                    if (topLoading || scrLoading || abLoader) return;
                    return <ViewX style={cpSty.emptyListMSG_cSty} >
                        <TextX text={str.NO_RESULTS_FOUND} tSty={cpSty.emptyListMSG_tSty} />
                    </ViewX>
                }}
            />
            <PressX
                onPress={() => navigation.navigate("AddFriendScr")}
                children={<ADD_FRIENDS_IC color={col.D_WHITE} />}
                mSty={friListSty.addExpenseBtn_mSty}
                cSty={friListSty.addExpenseBtn_cSty} />
        </MasterView>
    )
}

export default FriendsListingController