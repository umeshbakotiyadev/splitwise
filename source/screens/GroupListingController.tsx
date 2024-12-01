import React, { useCallback, useMemo, useRef } from 'react'
import { FriendsItem, MasterView, PressX, TextX, ViewX } from 'components'
import { ADD_FRIENDS_IC } from 'assets'
import { groupItemOBJType, groupItemType, StackProps } from 'Types'
import { useThemeX } from 'hooks'
import useAppStore from 'store'
import { FlatList } from 'react-native'
import { bSpace } from 'utils'

const GroupListingController = ({ navigation, route }: StackProps<'GroupListingScr'>) => {

    const { col, font, str, friListSty, cpSty } = useThemeX();
    const { groupList, userData } = useAppStore();

    const flatListRef = useRef<FlatList<any>>(null);

    const firendsListArr = useMemo((): Array<groupItemType> => {
        let obj: groupItemOBJType = {};
        for (const key in groupList) {
            if (key && !!groupList[key]?.groupFriends[userData?.email ?? ""]) obj[key] = groupList[key];
        }
        return Object.values(obj).reverse();
    }, [groupList, userData]);

    function gotoExpneseScrFN(item: groupItemType) {
        navigation.navigate("ExpenseListingScr", {
            isGroup: true, scrName: item?.groupName,
            friends: item?.groupFriends,
        });
    }

    const renderItem = useCallback(({ item, index }: { item: groupItemType, index: number }) => {
        return (<FriendsItem
            {...item} isGroup
            pImg={item?.gImg}
            name={item?.groupName}
            onPress={() => gotoExpneseScrFN(item)}
        />);
    }, [groupList, firendsListArr]);

    return (
        <MasterView backBtn={false} fixed hShow={false} >
            <FlatList
                ref={flatListRef} refreshing
                renderItem={renderItem}
                data={firendsListArr}
                contentContainerStyle={{ paddingVertical: bSpace, paddingBottom: 70 }}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <ViewX h={bSpace / 2} />}
                ListEmptyComponent={() => {
                    return <ViewX style={cpSty.emptyListMSG_cSty} >
                        <TextX text={str.NO_RESULTS_FOUND} tSty={cpSty.emptyListMSG_tSty} />
                    </ViewX>
                }}
            />
            <PressX
                onPress={() => navigation.navigate("MakeGroupScr")}
                children={<ADD_FRIENDS_IC color={col.D_WHITE} />}
                mSty={friListSty.addExpenseBtn_mSty}
                cSty={friListSty.addExpenseBtn_cSty} />

        </MasterView>)
}

export default GroupListingController