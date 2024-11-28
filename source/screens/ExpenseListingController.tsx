import React, { useCallback, useMemo, useRef, useState } from 'react'
import { ButtonX, ExpenseListingItem, MasterView, ScrLoader, TextX, ViewX } from 'components'
import { useThemeX } from 'hooks'
import { StackProps, ToastType } from 'Types';
import useAppStore from 'store';
import { FlatList, RefreshControl } from 'react-native';
import { bSpace } from 'utils';

const ExpenseListingController = ({ navigation, route }: StackProps<'ExpenseListingScr'>) => {

    const { str, friListSty, cpSty } = useThemeX();
    const { firendsList } = useAppStore();

    const [toast, setToast] = useState<ToastType>({});
    const [topLoading, setTopLoading] = useState<boolean>(false);
    const [bottomLoading, setBottomLoading] = useState<boolean>(false);
    const [scrLoading, setScrLoading] = useState<boolean>(true);
    const [abLoader, setABLoader] = useState<boolean>(false);

    const flatListRef = useRef<FlatList<any>>(null);

    const sFriend = useMemo(() => firendsList[route?.params?.email ?? ""], [firendsList]);

    const renderItem = useCallback(({ item, index }: { item: any, index: number }) => {
        return <ExpenseListingItem />
    }, []);

    return (
        <MasterView title={sFriend?.name} fixed >

            <FlatList
                ref={flatListRef} refreshing
                renderItem={renderItem}
                data={Object.values(firendsList) || []}
                contentContainerStyle={{ paddingVertical: bSpace }}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <ViewX h={bSpace / 2} />}
                ListEmptyComponent={() => {
                    return <ViewX style={cpSty.emptyListMSG_cSty} >
                        <TextX text={str.NO_RESULTS_FOUND} tSty={cpSty.emptyListMSG_tSty} />
                    </ViewX>
                }}
            />

            <ButtonX
                onPress={() => navigation.navigate("AddFriendScr")}
                text={str.ADD_EXPENCE}
                mSty={friListSty.addExpenseBtn_mSty}
                tSty={friListSty.addExpenseBtn_tSty}
            />
        </MasterView>
    )
}

export default ExpenseListingController