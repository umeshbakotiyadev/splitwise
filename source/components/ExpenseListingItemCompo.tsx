import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defStyType, expenseSharingType } from 'Types'
import { useThemeX } from 'hooks'
import { bSpace } from 'utils'
import ImageXCompo from './XCompos/ImageXCompo'
import { TICKET_IMG } from 'assets'
import ViewXCompo from './XCompos/ViewXCompo'
import TextXCompo from './XCompos/TextXCompo'
import { Size } from 'functions'

const ExpenseListingItemCompo = ({ description, expenseSharingUsers, id, isGroup, payBy, splitType }: expenseSharingType) => {

    const { defStyObj, col, font } = useThemeX();
    const sty = styFN(defStyObj);

    return (
        <View style={sty.mainSty} >
            <ImageXCompo source={TICKET_IMG} style={sty.ticketImgSty} resizeMode='cover' />
            <ViewXCompo pH={bSpace / 2} f={1} >
                <TextXCompo text={description} tSty={sty.discriptioinNameSty} />
                <TextXCompo text={"transaction"} tSty={sty.transactionStatusSty} />
            </ViewXCompo>
            <ViewXCompo pH={bSpace / 2} aItem='flex-end'>
                <TextXCompo text={"hi"} tSty={sty.statusSty} bgCol='red' />
                <TextXCompo text={"$123"} tSty={sty.moneySty} />
            </ViewXCompo>
        </View>
    )
}

export default React.memo(ExpenseListingItemCompo);

const styFN = ({ col, font }: defStyType) => StyleSheet.create({

    mainSty: {
        flexDirection: 'row',
        height: 100,
        flex: 1,
        backgroundColor: col.EXPENSE_LISTING_ITEM_BG,
        marginHorizontal: bSpace / 2,
        borderRadius: 30,
        overflow: 'hidden',
        padding: bSpace / 2,
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
        fontFamily: font.BOLD,
        fontSize: Size(16),
        // backgroundColor:'red',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 100,
        marginBlock: 5
    }

})