import React, { useCallback } from 'react'
import { MasterView, TextX, ViewX } from 'components'
import { expenseSharingUsersType, StackProps } from 'Types'
import { useThemeX } from 'hooks'
import { bSpace } from 'utils'
import useAppStore from 'store'
import { toNum } from 'functions'

const ExpenseDetailsController = ({ route }: StackProps<'ExpenseDetailsScr'>) => {

    const { expenseItem = {}, isGroup = false } = route?.params || {};

    const { str, col, expDetailSty, } = useThemeX();
    const { expenses, firendsList, userData } = useAppStore();

    function getNameByEmail(email = ""): string {
        return firendsList[email]?.name ?? "";
    }

    const renderItem = useCallback((item: expenseSharingUsersType, index: number) => {
        let dString = "";
        dString = (item?.email == userData?.email ? str.YOU : getNameByEmail(item?.email)) + " ";
        dString = dString + ((expenseItem?.payBy == item?.email) ? str.OWES : str.OWE) + " ";
        return (<TextX
            key={index.toString()}
            tSty={expDetailSty.expSharingUser_tSty}
            text={dString + `${str.INDIAN_MOENY_SIGN}${toNum(item?.amount ?? 0)}`}
        />);
    }, []);

    return (<MasterView title={str?.EXPENSE_DETAIL} pH={bSpace} pV={bSpace / 2} >
        <TextX text={expenseItem?.description} tSty={expDetailSty.expDescription} />
        <TextX
            text={str.PAID_BY + ` ${getNameByEmail(expenseItem?.payBy)} ${str.INDIAN_MOENY_SIGN + toNum(expenseItem?.totalAmount)}`}
            tSty={expDetailSty.payBy_tSty} />
        <ViewX style={expDetailSty.expSharingUser_mSty} >
            {Object.values(expenseItem?.expenseSharingUsers ?? {})?.map(renderItem)}
        </ViewX>
    </MasterView>)
}

export default ExpenseDetailsController