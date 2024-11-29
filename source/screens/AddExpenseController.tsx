import { FlatList, Keyboard, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useThemeX } from 'hooks';
import useAppStore from 'store';
import { expenseSharingType, expenseSharingUsersOBJType, expenseSharingUsersType, firendsListItemType, firendsListOBJType, StackProps, ToastType } from 'Types';
import { FlatList as BSFlatList, TextInput } from 'react-native-gesture-handler';
import { compressTextFN, generateUniqueID, getRandomImgFN, isValid, LOG } from 'functions';
import { BottomSheetX, ButtonX, FriendsItem, ImageX, MasterView, PaidByUserItem, PressX, TextInputX, TextX, UnequallyAmountItem, ViewX } from 'components';
import { bSpace } from 'utils';
import { FadeInDown } from 'react-native-reanimated';
import BottomSheet from '@gorhom/bottom-sheet';

const AddExpenseController = ({ navigation, route }: StackProps<'AddExpenseScr'>) => {

    const isGroup: boolean = false;

    const { str, col, addExpenseSty } = useThemeX();
    const { firendsList, userData, setExpense, expenses } = useAppStore();

    const [toast, setToast] = useState<ToastType>({});
    const [description, setDescription] = useState<string>("");
    const [amount, setAmount] = useState<string>('');
    const [splitType, setSplitType] = useState<"equally" | "unequally">('equally');
    const [payUser, setPayUser] = useState<firendsListItemType | null>(userData?.email ? firendsList[userData?.email] : null);
    const [unequallyExpenseOBJ, setUnequallyExpenseOBJ] = useState<expenseSharingUsersOBJType>({});

    const bottomSheetRef = useRef<BottomSheet>(null);
    const descriptionlRef = useRef<TextInput>(null);
    const loginUser = useMemo(() => firendsList[userData?.email ?? ""] ?? {}, [userData, firendsList]);

    const friendsOBJs = useMemo(() => {
        if (!isGroup) return ({ [route?.params?.email ?? "--"]: route?.params, [loginUser?.email ?? "**"]: loginUser })
        return {};
    }, [firendsList, route, loginUser]);

    function addExpenseFN() {
        Keyboard.dismiss();
        if (compressTextFN(description).length == 0) { setToast({ show: true, msg: str.PLZ_ENTER_DESCRIPTION }); return; }
        else if (compressTextFN(amount).length == 0) { setToast({ show: true, msg: str.PLZ_ENTER_AMOUNT }); return; }

        const amountNUM = parseFloat(amount || '0');
        let payBy: string = payUser?.email || "";
        if (splitType == 'unequally') {
            let checkEnteredAmount = 0;
            for (const item in unequallyExpenseOBJ) {
                checkEnteredAmount = checkEnteredAmount + (unequallyExpenseOBJ[item]?.amount || 0);
                if (amountNUM === unequallyExpenseOBJ[item]?.amount) payBy = item;
            }
            if (checkEnteredAmount > amountNUM) { setToast({ show: true, msg: str.THE_PER_PERSON_AMOUNTS_DONT_ADD_UP_TO_THE_TOTAL_AMOUNT + ` (${str.INDIAN_MOENY_SIGN + amountNUM}). ` + str.YOU_ARE_OVER_BY + ` ${str.INDIAN_MOENY_SIGN + (checkEnteredAmount - amountNUM)}.` }); return; }
            if (checkEnteredAmount < amountNUM) { setToast({ show: true, msg: str.THE_PER_PERSON_AMOUNTS_DONT_ADD_UP_TO_THE_TOTAL_AMOUNT + ` (${str.INDIAN_MOENY_SIGN + amountNUM}). ` + str.YOU_ARE_UNDER_BY + ` ${str.INDIAN_MOENY_SIGN + (amountNUM - checkEnteredAmount)}.` }); return; }
        }

        let expenseOBJ: expenseSharingType = {};
        const firiendsARR = Object.values(firendsList);
        const uniqueID = generateUniqueID();
        if (splitType == 'equally') {
            let expenseSharingUsers: expenseSharingUsersOBJType = {};
            for (const item in friendsOBJs) expenseSharingUsers = { ...expenseSharingUsers, [item]: { email: item, amount: amountNUM / (firiendsARR?.length) } }
            expenseOBJ = { id: uniqueID, description, payBy, splitType, isGroup, expenseSharingUsers, };
        } else {
            expenseOBJ = { id: uniqueID, description, payBy, splitType, isGroup, expenseSharingUsers: unequallyExpenseOBJ };
        }
        setExpense({ [uniqueID]: expenseOBJ });
        navigation?.goBack();
    }

    const unequallyAmountRenderItem = useCallback((item: expenseSharingUsersType, index: number) => {
        return <UnequallyAmountItem
            key={index.toString()}
            amount={item?.amount}
            name={firendsList[item?.email ?? ""]?.name}
            pImg={firendsList[item?.email ?? ""]?.pImg}
            onChangeT={t => { setUnequallyExpenseOBJ({ ...unequallyExpenseOBJ, [item?.email ?? ""]: { ...item, amount: t } }) }}
        />
    }, [unequallyExpenseOBJ, firendsList]);

    const padidByRenderItem = useCallback(({ index, item }: { item: firendsListItemType, index: number }) => {
        return (<PaidByUserItem
            {...item}
            isPaidBy={item?.email == payUser?.email}
            name={item?.name + `${(userData?.email == item?.email) ? (" (" + str?.YOU) + ")" : ""}`}
            onPress={() => { setPayUser(item); bottomSheetRef?.current?.close(); }}
        />)
    }, [bottomSheetRef, friendsOBJs, payUser]);

    useEffect(() => {
        let OBJ: firendsListOBJType = {};
        if (!isGroup) {
            OBJ = { [route?.params?.email ?? "--"]: route?.params, [loginUser?.email ?? "**"]: loginUser };
        } else { }

        let unequallyOBJ: any = {};
        for (let keys in OBJ) unequallyOBJ[keys] = { "email": OBJ[keys]?.email, "amount": 0 };
        setUnequallyExpenseOBJ(unequallyOBJ);
    }, []);

    return (<MasterView title={str.ADD_EXPENCE} p={bSpace}
        toast={toast} setToast={setToast}
        bSvg={
            <ViewX pH={bSpace} pV={bSpace / 2} >
                <ButtonX text={str.SUBMITE} onPress={addExpenseFN} />
            </ViewX>
        }
        modals={
            <BottomSheetX snapPoints={["50%", "80%"]} bRef={bottomSheetRef} >
                <BSFlatList
                    data={Object.values(friendsOBJs)}
                    renderItem={padidByRenderItem}
                    ItemSeparatorComponent={() => <ViewX h={5} />}
                    keyExtractor={(item, index) => index.toString()} />
            </BottomSheetX>
        } >

        {/* EXPENSE SHARING USERS LISTING */}
        <ViewX fD='row' jfy='center' pB={bSpace} >
            {Object.values(friendsOBJs).map((item, index) => {
                return <ImageX
                    key={index.toString()}
                    uri={item?.pImg}
                    h={45} ar={1} bR={100} />
            })}
        </ViewX>

        {/* DESCRIPTION INPUTBOX */}
        <TextInputX
            reff={descriptionlRef}
            phNm={str.ENTER_DESCRIPTIOIN}
            text={String(description).toLowerCase()}
            onChangeT={setDescription}
            kbType='default'
            onSubEdit={addExpenseFN}
            rKeyType='done'
            inputSty={{ textAlign: 'center', }}
            style={{ borderColor: undefined }}
            multiline
        />

        {/* AMOUNT INPUTBOX */}
        <TextInputX
            reff={descriptionlRef}
            phNm={str.ENTER_AMOUNT}
            text={String(amount).toLowerCase()}
            onChangeT={setAmount}
            onSubEdit={addExpenseFN}
            kbType='numeric'
            rKeyType='done'
            inputSty={{ textAlign: 'center', }}
            style={{ borderColor: undefined }}
        />

        {/* EQUALITY AND UNEQUALITY */}
        <ViewX style={addExpenseSty.mainC1} >
            <PressX
                onPress={() => { setSplitType('equally') }}
                text={str.EQUALLY}
                bgCol={splitType == 'equally' ? col.PRIMARY : col.TRANSPARENT}
                mSty={{ flex: 1 }}
                cSty={addExpenseSty.btnCon1}
                tSty={addExpenseSty.btn_tSty}
            />
            <ViewX w={5} />
            <PressX
                onPress={() => { setSplitType('unequally') }}
                bgCol={splitType == 'unequally' ? col.PRIMARY : col.TRANSPARENT}
                text={str.UNEQUALLY}
                mSty={{ flex: 1 }}
                cSty={addExpenseSty.btnCon1}
                tSty={addExpenseSty.btn_tSty}
            />
        </ViewX>

        {/* SELECT EXPENSE SHARING USER WITH EQUALITY */}
        {(splitType == 'equally')
            ? (<ViewX entering={FadeInDown} style={addExpenseSty.padinByMSty} >
                <TextX text={str.PAID_BY} tSty={addExpenseSty.paidBy_tSty} />
                <PressX
                    onPress={() => { bottomSheetRef?.current?.expand() }}
                    cSty={addExpenseSty.selPayBy_cSty}
                    mSty={addExpenseSty.selPayBy_mSty}>
                    <ImageX
                        uri={payUser?.pImg}
                        style={addExpenseSty.paidByUserImgSty} />
                    <TextX
                        text={payUser?.name}
                        tSty={addExpenseSty.selPayBy_tSty} />
                </PressX>
            </ViewX>)
            : (<ViewX mV={bSpace / 2} >
                {Object.values(unequallyExpenseOBJ).map(unequallyAmountRenderItem)}
            </ViewX>)
        }

    </MasterView>)
}

export default AddExpenseController