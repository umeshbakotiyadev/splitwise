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

    const { defStyObj, str, col } = useThemeX();
    const sty = styFN(defStyObj);

    return (
        <PressXCompo
            onPress={onPress} cSty={sty.cSty} mSty={sty.mSty}
            bCol={isSelected ? col?.PRIMARY : col.TRANSPARENT} >
            <ImageXCompo uri={pImg} style={sty.pImgSty} />
            <TextXCompo text={name} tSty={sty.name_tSty} />
        </PressXCompo>
    )
}

export default React.memo(PaidByUserItemCompo);

const styFN = ({ col, font }: defStyType) => StyleSheet.create({

    mSty: {
        height: 62,
        justifyContent: 'center',
        paddingHorizontal: bSpace / 2
    },
    cSty: {
        flexDirection: 'row',
        height: 60,
        borderRadius: bSpace,
        backgroundColor: col.OP_ITEM_BG,
        alignItems: 'center',
        paddingHorizontal: bSpace,
        borderWidth: 2,
        overflow: 'hidden'
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