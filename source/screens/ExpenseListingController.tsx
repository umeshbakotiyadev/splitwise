import React, { useCallback, useMemo, useRef } from 'react'
import { ExpenseListingItem, MasterView, PressX, TextX, ViewX } from 'components'
import { useThemeX } from 'hooks'
import { expenseSharingOBJType, expenseSharingType, expenseSharingUsersOBJType, firendsListOBJType, StackProps } from 'Types';
import useAppStore from 'store';
import { FlatList } from 'react-native';
import { bSpace } from 'utils';
import { PLUSH_IC } from 'assets';
import { LOG } from 'functions';

const ExpenseListingController = ({ navigation, route }: StackProps<'ExpenseListingScr'>) => {

    const { isGroup = false, friends = {}, scrName = "" } = route?.params ?? {};

    const { str, friListSty, cpSty } = useThemeX();
    const { firendsList, expenses, setResetExpenses } = useAppStore();

    const flatListRef = useRef<FlatList<any>>(null);

    const avaialbleFRIs = useMemo(() => {
        let obj: firendsListOBJType = {};
        for (const key in (friends ?? {})) obj[key] = firendsList[key];
        return obj;
    }, [firendsList, friends, expenses]);

    const expensesOBJ = useMemo(() => {
        let obj: expenseSharingOBJType = {};
        const expOBJ = { ...expenses };
        for (const item in expOBJ) {
            const expenseSharingUsers: expenseSharingUsersOBJType = expOBJ[item]?.expenseSharingUsers || {};
            let isTRUE: boolean = true;
            for (const key in avaialbleFRIs) { isTRUE = (!!expenseSharingUsers[key]); if (!isTRUE) break; }
            if (isTRUE) obj[item] = expOBJ[item];
        }
        return obj;
    }, [expenses, avaialbleFRIs, isGroup]);

    function delteExpenseFN(ID?: string) {
        const obj = { ...expenses };
        if (!!ID) delete obj[ID];
        setResetExpenses({ ...obj });
    }

    const renderItem = useCallback(({ item, index }: { item: expenseSharingType, index: number }) => {
        return (<ExpenseListingItem
            {...item}
            onDelete={() => delteExpenseFN(item?.id)}
            onEdit={() => navigation.navigate("AddExpenseScr", { friends: avaialbleFRIs, isGroup, isEdit: true, expItem: item })}
        />);
    }, [expensesOBJ, expenses, avaialbleFRIs, isGroup]);

    return (
        <MasterView title={scrName} fixed >
            <FlatList
                ref={flatListRef} refreshing
                renderItem={renderItem}
                data={Object.values(expensesOBJ).reverse()}
                contentContainerStyle={{ paddingVertical: bSpace, paddingBottom: 80 }}
                keyExtractor={(item, index) => index.toString() + item?.id}
                ItemSeparatorComponent={() => <ViewX h={bSpace / 2} />}
                ListEmptyComponent={() => {
                    return <ViewX style={cpSty.emptyListMSG_cSty} >
                        <TextX text={str.NO_RESULTS_FOUND} tSty={cpSty.emptyListMSG_tSty} />
                    </ViewX>
                }} />
            <PressX
                onPress={() => navigation.navigate("AddExpenseScr", { friends: avaialbleFRIs, isGroup })}
                children={<PLUSH_IC />}
                mSty={friListSty.addExpenseBtn_mSty}
                cSty={friListSty.addExpenseBtn_cSty}
            />
        </MasterView>
    )
}

export default ExpenseListingController