import { StyleSheet } from 'react-native'
import React from 'react'
import { defStyType, StackProps } from 'Types';
import { useThemeX } from 'hooks';
import { ButtonX, ImageX, MasterView, TextX, ViewX } from 'components';
import useAppStore from 'store';
import { bSpace } from 'utils';

const ProfileController = ({ navigation, route }: StackProps<'ProfileScr'>) => {

    const { setUserData, setLogin, userData } = useAppStore();
    const { col, font, friListSty, str, defStyObj } = useThemeX();
    const sty = styFN(defStyObj);

    return (
        <MasterView backBtn={false} pH={bSpace} pV={bSpace / 2} hShow={false} >
            <ViewX aItem='center' >
                <ImageX uri={userData?.pImg} style={sty.pImgSty} />
                <TextX text={userData?.name} lines={1} tSty={sty.name_tSty} />
                <TextX text={userData?.email} tSty={sty.email_tSty} />
            </ViewX>
            <ButtonX onPress={() => { setUserData({}); setLogin(false); }} text={str.LOGOUT} />
        </MasterView>)
}

export default ProfileController

const styFN = ({ col, font }: defStyType) => StyleSheet.create({

    pImgSty: {
        height: 100,
        aspectRatio: 1,
        borderRadius: 100,
        alignItems: 'center',
    },

    name_tSty: {
        fontFamily: font.BOLD,
        fontSize: 20,
        color: col.D_BLACK,
        textAlign: 'center',
        paddingVertical: 2,
        paddingTop: 10,
    },
    email_tSty: {
        fontFamily: font.SEMI_BOLD,
        fontSize: 14,
        color: col.D_BLACK,
        textAlign: 'center',
        paddingBottom: 20
    },
})