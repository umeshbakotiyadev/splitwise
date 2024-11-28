import { StyleSheet, } from 'react-native'
import React from 'react'
import { defStyType, firendsListItemType, StackProps } from 'Types'
import { useThemeX } from 'hooks'
import { bSpace } from 'utils'
import TextXCompo from './XCompos/TextXCompo'
import { Size } from 'functions'
import PressXCompo from './XCompos/PressXCompo'
import ImageXCompo from './XCompos/ImageXCompo'
import { useNavigation } from '@react-navigation/native'

const FriendsItemCompo = (item: firendsListItemType) => {
    const { email, id, name, pImg } = item
    const navigation: StackProps<'FriendsListingScr'>['navigation'] = useNavigation();
    const { defStyObj } = useThemeX();
    const sty = styFN(defStyObj);

    return (<PressXCompo
        cSty={sty.mainSty}
        onPress={() => navigation.navigate("ExpenseListingScr", item)} >
        <ImageXCompo source={pImg} style={sty.imgSty} resizeMode='stretch' />
        <TextXCompo tSty={sty.nameSty} text={name} />
    </PressXCompo>)
}

export default FriendsItemCompo

const styFN = ({ col, font }: defStyType) => StyleSheet.create({

    mainSty: {
        flexDirection: 'row',
        flex: 1,
        height: 60,
        backgroundColor: col.PRIMARY,
        paddingHorizontal: bSpace,
        marginHorizontal: bSpace / 2,
        borderRadius: 20,
        alignItems: 'center'
    },
    nameSty: {
        fontFamily: font.MEDIUM,
        fontSize: Size(12),
        paddingHorizontal: bSpace / 2,
        color: col.D_WHITE,
    },
    imgSty: {
        height: "70%",
        aspectRatio: 1,
        backgroundColor: 'red',
        borderRadius: 100,
    }

})