import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { MasterView, ScrLoader, TextX, ViewX } from 'components'
import { useAPI, useThemeX } from 'hooks'
import { LOG, makeFriendsListForLocalStoreFN } from 'functions'
import { ToastType } from 'Types'
import useAppStore from 'store'
import { bSpace } from 'utils'

const FriendsListingController = () => {

    const { getFriendsListAPI } = useAPI();
    const { setFriensListData, firendsList } = useAppStore();
    const { col, cpSty, str } = useThemeX();

    const [toast, setToast] = useState<ToastType>({});
    const [topLoading, setTopLoading] = useState<boolean>(false);
    const [bottomLoading, setBottomLoading] = useState<boolean>(false);
    const [scrLoading, setScrLoading] = useState<boolean>(true);
    const [abLoader, setABLoader] = useState<boolean>(false);

    const flatListRef = useRef<FlatList<any>>(null);
    const hasNextPageRef = useRef<boolean>(true);

    LOG(firendsList, "firendsList")
    async function getFriendsList({ topRefresh = false, bottomRefresh = false }
        : { topRefresh?: boolean, bottomRefresh?: boolean; }) {

        if (bottomRefresh) setBottomLoading(true);
        if (topRefresh) {
            hasNextPageRef.current = true;
            setTopLoading(true);
        }

        // if (!hasNextPageRef.current) return;
        getFriendsListAPI().then(({ res }) => {
            if (Array.isArray(res?.data)) {
                LOG(res, "checkFirendsList");
                const data = res?.data;
                hasNextPageRef.current = !!(res?.next);
                LOG(makeFriendsListForLocalStoreFN(data))
                setFriensListData(makeFriendsListForLocalStoreFN(data));
            }
            setBottomLoading(false); setTopLoading(false); setScrLoading(false);
        }).finally(() => {
            setBottomLoading(false); setTopLoading(false); setScrLoading(false);
        });;
    }

    useEffect(() => {
        getFriendsList({ topRefresh: true });
    }, []);

    return (
        <MasterView fixed hShow={false} >
            <FlatList
                ref={flatListRef} refreshing
                data={Object.entries(firendsList)}
                renderItem={() => <></>}
                contentContainerStyle={{ paddingVertical: bSpace }}
                keyExtractor={(item, index) => index.toString()}
                refreshControl={<RefreshControl
                    refreshing={topLoading}
                    colors={[col.PRIMARY, col.PRIMARY]}
                    onRefresh={() => {
                        getFriendsList({ topRefresh: true });
                    }}
                />}
                onEndReached={() => {
                    if (!hasNextPageRef.current || bottomLoading || topLoading) return;
                    getFriendsList({ topRefresh: false, bottomRefresh: true });
                }}
                ListFooterComponent={() => {
                    return (bottomLoading && Object.entries(firendsList)?.length > 0) ? <ViewX pV={30} >
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
        </MasterView>
    )
}

export default FriendsListingController

const styles = StyleSheet.create({})