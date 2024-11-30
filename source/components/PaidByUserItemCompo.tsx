import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defStyType, firendsListItemType } from 'Types'
import { useThemeX } from 'hooks'
import PressXCompo from './XCompos/PressXCompo'
import ImageXCompo from './XCompos/ImageXCompo'
import TextXCompo from './XCompos/TextXCompo'
import { Size } from 'functions'
import { bSpace } from 'utils'

const PaidByUserItemCompo = ({ email, id, name, pImg, isSelected, onPress }
    : firendsListItemType & { isSelected: boolean, onPress: () => void }) => {

    const { defStyObj, str } = useThemeX();
    const sty = styFN(defStyObj);

    return (
        <PressXCompo onPress={onPress} cSty={sty.cSty} bWidth={isSelected ? 3 : undefined} >
            <ImageXCompo uri={pImg} style={sty.pImgSty} />
            <TextXCompo text={name} tSty={sty.name_tSty} />
        </PressXCompo>
    )
}

export default React.memo(PaidByUserItemCompo);

const styFN = ({ col, font }: defStyType) => StyleSheet.create({

    cSty: {
        flexDirection: 'row',
        height: 60,
        flex: 1,
        borderRadius: bSpace,
        backgroundColor: col.OP_ITEM_BG,
        marginHorizontal: 10,
        alignItems: 'center',
        paddingHorizontal: bSpace,
        borderColor: col.PRIMARY
    },
    pImgSty: {
        height: "70%",
        aspectRatio: 1,
        borderRadius: 100,
        marginRight: bSpace
    },
    name_tSty: {
        color: col.D_BLACK,
        fontFamily: font.MEDIUM,
        fontSize: Size(16)
    }

})