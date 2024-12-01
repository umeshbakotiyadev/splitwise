import { Keyboard, } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useThemeX } from 'hooks';
import useAppStore from 'store';
import { expenseSharingType, expenseSharingUsersOBJType, expenseSharingUsersType, firendsListItemType, firendsListOBJType, StackProps, ToastType } from 'Types';
import { FlatList as BSFlatList, TextInput } from 'react-native-gesture-handler';
import { compressTextFN, generateUniqueID, } from 'functions';
import { BottomSheetX, ButtonX, ImageX, MasterView, PaidByUserItem, PressX, TextInputX, TextX, UnequallyAmountItem, ViewX } from 'components';
import { bSpace } from 'utils';
import BottomSheet from '@gorhom/bottom-sheet';

const AddExpenseController = ({ navigation, route }: StackProps<'AddExpenseScr'>) => {

    const { isGroup = false, friends = {}, isEdit = false, expItem = {} } = route?.params ?? {};

    const { str, col, addExpenseSty } = useThemeX();
    const { firendsList, userData, setExpense, expenses } = useAppStore();

    const [toast, setToast] = useState<ToastType>({});
    const [description, setDescription] = useState<string>(expItem?.description || "");
    const [amount, setAmount] = useState<string>(expItem?.totalAmount?.toString() || '');
    const [splitType, setSplitType] = useState<"equally" | "unequally">(expItem?.splitType || 'equally');
    const [payUser, setPayUser] = useState<firendsListItemType | null | undefined>(userData?.email ? firendsList[userData?.email] : null);
    const [unequallyExpenseOBJ, setUnequallyExpenseOBJ] = useState<expenseSharingUsersOBJType>({});

    const bottomSheetRef = useRef<BottomSheet>(null);
    const descriptionlRef = useRef<TextInput>(null);

    const friendsOBJs = useMemo(() => {
        return getAvailableFRIs();
    }, [firendsList]);

    function getAvailableFRIs(): firendsListOBJType {
        let obj: firendsListOBJType = {};
        for (const key in (friends ?? {})) obj[key] = firendsList[key];
        return obj;
    }

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
                // if (amountNUM === unequallyExpenseOBJ[item]?.amount) payBy = item;
            }
            if (checkEnteredAmount > amountNUM) { setToast({ show: true, msg: str.THE_PER_PERSON_AMOUNTS_DONT_ADD_UP_TO_THE_TOTAL_AMOUNT + ` (${str.INDIAN_MOENY_SIGN + amountNUM}). ` + str.YOU_ARE_OVER_BY + ` ${str.INDIAN_MOENY_SIGN + (checkEnteredAmount - amountNUM)}.` }); return; }
            if (checkEnteredAmount < amountNUM) { setToast({ show: true, msg: str.THE_PER_PERSON_AMOUNTS_DONT_ADD_UP_TO_THE_TOTAL_AMOUNT + ` (${str.INDIAN_MOENY_SIGN + amountNUM}). ` + str.YOU_ARE_UNDER_BY + ` ${str.INDIAN_MOENY_SIGN + (amountNUM - checkEnteredAmount)}.` }); return; }
        }

        let expenseOBJ: expenseSharingType = {};
        const firiendsARR = Object.values(friendsOBJs);
        const uniqueID = (isEdit && expItem?.id) ? expItem?.id : generateUniqueID();
        if (splitType == 'equally') {
            let expenseSharingUsers: expenseSharingUsersOBJType = {};
            for (const item in friendsOBJs) expenseSharingUsers[item] = { email: item, amount: amountNUM / (firiendsARR?.length) };
            expenseOBJ = { id: uniqueID, description, payBy, splitType, isGroup, expenseSharingUsers, totalAmount: amountNUM };
        } else {
            let totalAMOUNTEmail: undefined | string = undefined;
            for (const item in unequallyExpenseOBJ) {
                if (item && unequallyExpenseOBJ[item]?.amount == amountNUM) totalAMOUNTEmail = unequallyExpenseOBJ[item]?.email;
            };
            if (totalAMOUNTEmail == userData?.email && totalAMOUNTEmail == payBy) { return navigation?.goBack(); }
            else if (totalAMOUNTEmail == payBy) { return setToast({ show: true, msg: str.YOU_CANNOT }); }
            expenseOBJ = { id: uniqueID, description, payBy, splitType, isGroup, expenseSharingUsers: unequallyExpenseOBJ, totalAmount: amountNUM };
        }
        setExpense({ [uniqueID]: { ...expenseOBJ } });
        navigation?.goBack();
    }

    const unequallyAmountRenderItem = useCallback((item: expenseSharingUsersType, index: number) => {
        return <UnequallyAmountItem
            key={index.toString()}
            amount={item?.amount}
            name={firendsList[item?.email ?? ""]?.name + `${userData?.email == item?.email ? (' (' + str.YOU + ')') : ""}`}
            pImg={firendsList[item?.email ?? ""]?.pImg}
            onChangeT={t => { setUnequallyExpenseOBJ({ ...unequallyExpenseOBJ, [item?.email ?? ""]: { ...item, amount: t } }) }}
        />
    }, [unequallyExpenseOBJ, firendsList]);

    const padidByRenderItem = useCallback(({ index, item }: { item: firendsListItemType, index: number }) => {
        return (<PaidByUserItem
            {...item}
            isSelected={item?.email == payUser?.email}
            name={item?.name + `${(userData?.email == item?.email) ? (" (" + str?.YOU) + ")" : ""}`}
            onPress={() => { setPayUser(item); bottomSheetRef?.current?.close(); }}
        />)
    }, [bottomSheetRef, friendsOBJs, payUser]);

    useEffect(() => {
        if (isEdit) {
            if (expItem?.payBy) setPayUser(firendsList[expItem?.payBy]);
            if (expItem?.expenseSharingUsers) setUnequallyExpenseOBJ(expItem?.expenseSharingUsers);
        } else {
            let unequallyOBJ: any = {};
            for (let keys in getAvailableFRIs()) unequallyOBJ[keys] = { "email": keys, "amount": 0 };
            setUnequallyExpenseOBJ(unequallyOBJ);
        }
    }, []);

    return (<MasterView title={isEdit ? str.EDIT_EXPENSE : str.ADD_EXPENCE} p={bSpace}
        toast={toast} setToast={setToast}
        bSvg={
            <ViewX pH={bSpace} pV={bSpace / 2} >
                <ButtonX text={str.SUBMITE} onPress={addExpenseFN} />
            </ViewX>
        }
        modals={
            <BottomSheetX snapPoints={["50%", "80%"]} bRef={bottomSheetRef} >
                <BSFlatList
                    data={Object.values(friendsOBJs).reverse()}
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
            maxLength={8}
        />

        <ViewX style={addExpenseSty.padinByMSty} >
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
        </ViewX>

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
            ? (<></>)
            : (<ViewX mV={bSpace / 2} >
                {Object.values(unequallyExpenseOBJ).map(unequallyAmountRenderItem)}
            </ViewX>)
        }

    </MasterView>)
}

export default AddExpenseController