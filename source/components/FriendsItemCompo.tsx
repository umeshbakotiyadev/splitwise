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
import ViewXCompo from './XCompos/ViewXCompo'
import useAppStore from 'store'

const FriendsItemCompo = (item: firendsListItemType & { onPress: () => void }) => {

    const { email, id, name, pImg, onPress } = item;

    const navigation: StackProps<'FriendsListingScr'>['navigation'] = useNavigation();
    const { defStyObj, col } = useThemeX();
    const sty = styFN(defStyObj);

    return (<PressXCompo
        cSty={sty.mainSty}
        onPress={onPress} >
        <ImageXCompo uri={pImg} style={sty.imgSty} resizeMode='cover' />
        <ViewXCompo f={1} >
            <TextXCompo tSty={sty.nameSty} lines={1} text={name} />
        </ViewXCompo>
        {/* <ViewXCompo style={sty.seCSty} >
            <TextXCompo
                text={"owes you"} fColor={col.D_BLACK}
                tSty={sty.statusTextSty} />
            <TextXCompo
                text={"US$150.00"} fColor={col.D_BLACK}
                tSty={sty.moneyTextSty} />
        </ViewXCompo> */}
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
        paddingHorizontal: bSpace,
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
    },
    statusTextSty: {
        fontFamily: font.LIGHT,
        fontSize: Size(10)
    },
    moneyTextSty: {
        fontFamily: font.SEMI_BOLD,
        fontSize: Size(12)
    }

})