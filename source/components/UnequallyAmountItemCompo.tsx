import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ViewXCompo from './XCompos/ViewXCompo';
import { useThemeX } from 'hooks';
import { defStyType } from 'Types';
import TextInputXCompo from './XCompos/TextInputXCompo';
import { bSpace } from 'utils';
import ImageXCompo from './XCompos/ImageXCompo';
import TextXCompo from './XCompos/TextXCompo';
import { Size } from 'functions';

const UnequallyAmountItemCompo = ({ pImg, name, amount, onChangeT }: { pImg?: string, name?: string, amount?: number, onChangeT: (i: number) => void }) => {

    const { defStyObj, col, str } = useThemeX();
    const sty = styFN(defStyObj);

    return (
        <ViewXCompo style={sty.mSty} >
            <ViewXCompo style={sty.boxOne} >
                <ImageXCompo uri={pImg} style={sty.pImgSty} />
                <TextXCompo text={name} lines={1} tSty={sty.nameSty} />
            </ViewXCompo>
            <TextInputXCompo
                text={String(amount ?? 0)}
                onChangeT={t => onChangeT(parseInt(t || '0'))}
                kbType='numeric'
            rKeyType='done' w={100}
                style={{ borderWidth: undefined, marginBottom: 0 }}
                inputSty={{ textAlign: 'center', }}
            />
        </ViewXCompo>
    )
}

export default React.memo(UnequallyAmountItemCompo);

const styFN = ({ col, font }: defStyType) => StyleSheet.create({

    mSty: {
        borderRadius: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: col.UNEQUALLY_ITEM_BG,
        marginVertical: 5,
        justifyContent: 'space-between',
        paddingHorizontal: bSpace
    },
    pImgSty: {
        height: 40,
        aspectRatio: 1,
        borderRadius: 100,
    },
    nameSty: {
        color: col.D_BLACK,
        fontFamily: font.SEMI_BOLD,
        fontSize: Size(14),
        paddingHorizontal: bSpace / 2
    },
    boxOne: {
        flexDirection: 'row',
        alignItems: 'center'
    }

})