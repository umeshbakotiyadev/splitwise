import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react'
import { defStyType, expenseSharingType } from 'Types'
import { useThemeX } from 'hooks'
import { bSpace } from 'utils'
import ImageXCompo from './XCompos/ImageXCompo'
import { DELETE_IC, EDIT_IC, TICKET_IMG } from 'assets'
import ViewXCompo from './XCompos/ViewXCompo'
import TextXCompo from './XCompos/TextXCompo'
import { Size, toNum } from 'functions'
import useAppStore from 'store'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import PressXCompo from './XCompos/PressXCompo'

const ExpenseListingItemCompo = (iTEM: expenseSharingType & { onDelete: () => void, onEdit: () => void, onPress: () => void }) => {

    const { description, expenseSharingUsers, id, isGroup, payBy, splitType, totalAmount, onDelete, onEdit, onPress } = iTEM;
    const { userData, firendsList } = useAppStore();
    const { defStyObj, col, str } = useThemeX();
    const sty = styFN(defStyObj);

    const swipeableRef = useRef<Swipeable>(null);

    /** YOU LENT, YOU BORROWED */
    const status: string = useMemo(() => {
        if (payBy == userData?.email) return str.YOU_LENT;
        return str.YOU_BORROWED;
    }, [userData, payBy]);

    /** PAID-BY */
    const whoPaid: string = useMemo(() => {
        if (userData?.email == payBy) return (`${str.YOU} ${str.PAID} ${str.INDIAN_MOENY_SIGN}${toNum(totalAmount ?? 0)}`);
        return (`${firendsList[payBy ?? ""]?.name} ${str.PAID} ${str.INDIAN_MOENY_SIGN}${toNum(totalAmount ?? 0)}`);
    }, [userData, payBy, firendsList, totalAmount]);

    /** LENT-PRISE, BORROWED-PRISE */
    const amount: number = useMemo(() => {
        let prise = 0;
        const expUSERs = { ...expenseSharingUsers };
        if (splitType == 'equally') prise = expUSERs[userData?.email ?? ""]?.amount ?? 0;
        else {
            if (payBy == userData?.email) {
                for (const key in expUSERs) if (key !== userData?.email) prise = prise + (expUSERs[key ?? ""]?.amount ?? 0);
            }
            else prise = expUSERs[userData?.email ?? ""]?.amount ?? 0;
        }
        return prise;
    }, [iTEM]);

    /** SWIPE ITEMS - DELETE_BTN, EDIT_BTN */
    const renderRightActions = useCallback(() => {
        return <ViewXCompo style={sty.swipe_mSty} >
            <PressXCompo onPress={() => { onEdit(); swipeableRef?.current?.close() }}
                cSty={sty.swipBtn_cSty} bgCol={col.PRIMARY}
                mSty={sty.swipBtn_mSty}>
                <EDIT_IC color={col.D_WHITE} />
            </PressXCompo>
            <PressXCompo onPress={() => { onDelete(); swipeableRef?.current?.close() }}
                cSty={sty.swipBtn_cSty} bgCol={col.LIGHT_RED}
                mSty={sty.swipBtn_mSty} mR={bSpace / 2} >
                <DELETE_IC color={col.D_WHITE} />
            </PressXCompo>
        </ViewXCompo>
    }, [swipeableRef.current, iTEM]);

    return (
        <Swipeable ref={swipeableRef} enabled={true} renderRightActions={renderRightActions}>
            <TouchableOpacity activeOpacity={.8} style={sty.mainSty} onPress={onPress} >
                <ImageXCompo source={TICKET_IMG} style={sty.ticketImgSty} resizeMode='cover' />
                <ViewXCompo style={sty.c1Sty} >
                    <TextXCompo text={description} lines={2} tSty={sty.discriptioinNameSty} />
                    <TextXCompo text={whoPaid} tSty={sty.transactionStatusSty} />
                </ViewXCompo>
                <ViewXCompo style={sty.c2Sty}>
                    <TextXCompo text={status} tSty={sty.statusSty} bgCol={status == str.YOU_LENT ? col.GREEN : col.LIGHT_RED} />
                    <TextXCompo text={str.INDIAN_MOENY_SIGN + toNum(amount)}
                        tSty={sty.moneySty} fColor={status == str.YOU_LENT ? col.GREEN : col.LIGHT_RED} />
                </ViewXCompo>
            </TouchableOpacity>
        </Swipeable>
    )
}

export default React.memo(ExpenseListingItemCompo);

const styFN = ({ col, font }: defStyType) => StyleSheet.create({

    mainSty: {
        flexDirection: 'row',
        height: 80,
        flex: 1,
        backgroundColor: col.EXPENSE_LISTING_ITEM_BG,
        borderRadius: 20,
        overflow: 'hidden',
        padding: bSpace / 2,
        marginHorizontal: bSpace / 2,
        alignItems: 'center'
    },
    ticketImgSty: {
        height: "80%",
        aspectRatio: 1,
        overflow: 'hidden',
        borderRadius: 1000
    },
    discriptioinNameSty: {
        color: col.D_BLACK,
        fontFamily: font.BOLD,
        fontSize: Size(16),
    },
    transactionStatusSty: {
        color: col.D_BLACK,
        fontFamily: font.REGULAR,
        fontSize: Size(12),
    },
    moneySty: {
        color: col.D_BLACK,
        fontFamily: font.BOLD,
        fontSize: Size(18),
    },
    statusSty: {
        color: col.D_BLACK,
        fontFamily: font.SEMI_BOLD,
        fontSize: Size(12),
        paddingHorizontal: 7,
        paddingVertical: 2,
        borderRadius: 100,
        marginBottom: 5,
        textTransform: 'uppercase'
    },
    c1Sty: {
        flex: 1,
        paddingVertical: 15,
        justifyContent: 'space-evenly',
        paddingHorizontal: 10
    },
    c2Sty: {
        alignItems: 'flex-end',
    },

    swipe_mSty: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center'
    },
    swipe_cSty: {},
    swipBtn_cSty: {
        padding: 5,
        borderRadius: 100,
        marginHorizontal: 5
    },
    swipBtn_mSty: {

    }

})