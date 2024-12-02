import { StyleSheet, } from 'react-native'
import React, { useMemo } from 'react'
import { defStyType, expenseSharingOBJType, expenseSharingUsersOBJType, firendsListItemType, firendsListOBJType, StackProps } from 'Types'
import { useThemeX } from 'hooks'
import { bSpace } from 'utils'
import TextXCompo from './XCompos/TextXCompo'
import { LOG, Size, toNum } from 'functions'
import PressXCompo from './XCompos/PressXCompo'
import ImageXCompo from './XCompos/ImageXCompo'
import { useNavigation } from '@react-navigation/native'
import ViewXCompo from './XCompos/ViewXCompo'
import useAppStore from 'store'

const FriendsItemCompo = (item: firendsListItemType & { onPress: () => void, isGroup?: boolean }) => {

    const { email, id, name, pImg, onPress, isGroup = false } = item;

    const { expenses, firendsList, userData, groupList } = useAppStore();
    const { defStyObj, col, str } = useThemeX();
    const sty = styFN(defStyObj);

    const friends: firendsListOBJType = useMemo(() => {
        let obj: firendsListOBJType = {};
        if (isGroup) obj = groupList[id ?? ""]?.groupFriends;
        else obj = ({ [item?.email ?? ""]: item, [userData?.email ?? ""]: firendsList[item?.email ?? ""] });
        return obj;
    }, [groupList, isGroup, item, userData, firendsList]);

    const avaialbleFRIs = useMemo(() => {
        let obj: firendsListOBJType = {};
        for (const key in (friends ?? {})) obj[key] = firendsList[key];
        return obj;
    }, [firendsList, friends, expenses]);

    const expensesOBJ = useMemo(() => {
        let obj: expenseSharingOBJType = {};
        const expOBJ = { ...expenses };
        for (const expKEY in expOBJ) {
            const expenseSharingUsers: expenseSharingUsersOBJType = expOBJ[expKEY]?.expenseSharingUsers || {};
            let isTRUE: boolean = true;
            for (const friKEY in avaialbleFRIs) {
                isTRUE = Boolean(!!expenseSharingUsers[friKEY] && isGroup == expOBJ[expKEY]?.isGroup);
                if (!isTRUE) break;
            }
            if (isTRUE) obj[expKEY] = expOBJ[expKEY];
        }
        return obj;
    }, [expenses, avaialbleFRIs]);

    const checkAmount = useMemo(() => {
        let totalAmount: number = 0;
        for (const ID in expensesOBJ) {
            const payBy = expensesOBJ[ID]?.payBy;
            const splitType = expensesOBJ[ID]?.splitType;
            const expenseSharingUsers = expensesOBJ[ID]?.expenseSharingUsers || {};
            if (payBy == userData?.email) {
                if (splitType == 'equally') totalAmount = totalAmount + (expenseSharingUsers[userData?.email ?? ""]?.amount ?? 0);
                else {
                    for (const key in expenseSharingUsers) if (key !== userData?.email) totalAmount = totalAmount + (expenseSharingUsers[key ?? ""]?.amount ?? 0);
                }
            } else {
                if (splitType == 'equally') totalAmount = totalAmount - (expenseSharingUsers[userData?.email ?? ""]?.amount ?? 0);
                else {
                    for (const key in expenseSharingUsers) if (key !== payBy) totalAmount = totalAmount - (expenseSharingUsers[key ?? ""]?.amount ?? 0);
                }
            }
        }
        return totalAmount;
    }, [expenses, expensesOBJ, userData]);

    return (<PressXCompo
        cSty={sty.mainSty}
        onPress={onPress} >
        <ImageXCompo uri={pImg} style={sty.imgSty} resizeMode='cover' />
        <ViewXCompo f={1} >
            <TextXCompo tSty={sty.nameSty} lines={1} text={name} />
        </ViewXCompo>
        {(checkAmount !== 0) && (<ViewXCompo style={sty.seCSty} >
            <TextXCompo
                text={checkAmount > 0 ? `${str.YOU_OWE} ` : `${str.OWES_YOU} `}
                fColor={col.D_BLACK}
                tSty={sty.statusTextSty} />
            <TextXCompo
                text={str.INDIAN_MOENY_SIGN + (checkAmount > 0 ? toNum(checkAmount) : toNum(Math.abs(checkAmount)))}
                tSty={sty.moneyTextSty} fColor={checkAmount > 0 ? col.GREEN : col.LIGHT_RED} />
        </ViewXCompo>)}
    </PressXCompo>)
}

export default FriendsItemCompo

const styFN = ({ col, font }: defStyType) => StyleSheet.create({

    mainSty: {
        flexDirection: 'row',
        flex: 1,
        height: 60,
        backgroundColor: col.FRI_LISTING_ITEM_BG,
        paddingHorizontal: bSpace,
        marginHorizontal: bSpace / 2,
        borderRadius: 20,
        alignItems: 'center'
    },
    nameSty: {
        fontFamily: font.REGULAR,
        fontSize: Size(16),
        paddingLeft: bSpace,
        paddingRight: bSpace / 2,
        color: col.D_BLACK,
    },
    imgSty: {
        height: "70%",
        aspectRatio: 1,
        backgroundColor: col.D_WHITE,
        borderRadius: 100,
    },
    seCSty: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    statusTextSty: {
        fontFamily: font.REGULAR,
        fontSize: Size(10),
        color: col.D_BLACK
    },
    moneyTextSty: {
        fontFamily: font.BOLD,
        fontSize: Size(12)
    }

})