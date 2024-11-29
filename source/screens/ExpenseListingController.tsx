import React, { useCallback, useMemo, useRef, useState } from 'react'
import { ButtonX, ExpenseListingItem, MasterView, PressX, ScrLoader, TextX, ViewX } from 'components'
import { useThemeX } from 'hooks'
import { expenseSharingOBJType, expenseSharingType, expenseSharingUsersOBJType, StackProps, ToastType } from 'Types';
import useAppStore from 'store';
import { FlatList, RefreshControl } from 'react-native';
import { bSpace } from 'utils';
import { ADD_FRIENDS_IC, PLUSH_IC } from 'assets';
import { LOG } from 'functions';

const ExpenseListingController = ({ navigation, route }: StackProps<'ExpenseListingScr'>) => {

    const isGroup: boolean = false;

    const { str, friListSty, cpSty } = useThemeX();
    const { firendsList, expenses, userData } = useAppStore();

    const [toast, setToast] = useState<ToastType>({});
    const [topLoading, setTopLoading] = useState<boolean>(false);
    const [bottomLoading, setBottomLoading] = useState<boolean>(false);
    const [scrLoading, setScrLoading] = useState<boolean>(true);
    const [abLoader, setABLoader] = useState<boolean>(false);

    const flatListRef = useRef<FlatList<any>>(null);

    const sFriend = useMemo(() => firendsList[route?.params?.email ?? ""], [firendsList]);

    const expensesOBJ = useMemo(() => {
        let obj: expenseSharingOBJType = {};
        for (const item in expenses) {
            console.log(isGroup, (expenses[item]?.isGroup), (isGroup !== !!(expenses[item]?.isGroup)));
            if (isGroup !== !!(expenses[item]?.isGroup)) return obj;
            const expenseSharingUsers: expenseSharingUsersOBJType = expenses[item]?.expenseSharingUsers || {};
            console.log(expenseSharingUsers[userData?.email ?? ""], expenseSharingUsers[sFriend?.email ?? ""]);
            if (expenseSharingUsers[userData?.email ?? ""] && expenseSharingUsers[sFriend?.email ?? ""]) obj = { [item]: expenses[item] };
        }
        return obj;
    }, [expenses]);

    const renderItem = useCallback(({ item, index }: { item: expenseSharingType, index: number }) => {
        return <ExpenseListingItem {...item} />
    }, []);

    return (
        <MasterView title={sFriend?.name} fixed >

            <FlatList
                ref={flatListRef} refreshing
                renderItem={renderItem}
                data={Object.values(expensesOBJ) || []}
                contentContainerStyle={{ paddingVertical: bSpace }}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <ViewX h={bSpace / 2} />}
                ListEmptyComponent={() => {
                    return <ViewX style={cpSty.emptyListMSG_cSty} >
                        <TextX text={str.NO_RESULTS_FOUND} tSty={cpSty.emptyListMSG_tSty} />
                    </ViewX>
                }}
            />

            <PressX
                onPress={() => navigation.navigate("AddExpenseScr", sFriend)}
                children={<PLUSH_IC />}
                mSty={friListSty.addExpenseBtn_mSty}
                cSty={friListSty.addExpenseBtn_cSty}
            />
        </MasterView>
    )
}

export default ExpenseListingController