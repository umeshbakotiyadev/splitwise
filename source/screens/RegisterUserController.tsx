import { StyleSheet, Keyboard } from 'react-native'
import React, { useRef, useState } from 'react'
import { ButtonX, MasterView, TextInputX, } from 'components'
import { useThemeX } from 'hooks'
import { defStyType, StackProps, ToastType } from 'Types'
import useAppStore from 'store'
import { compressTextFN, generateUniqueID, getRandomImgFN, isValid } from 'functions'
import { TextInput } from 'react-native-gesture-handler'
import { bSpace } from 'utils'

const RegisterUserController = ({ navigation, route }: StackProps<'RegisterUserScr'>) => {

    const { firendsList, setFriensListData } = useAppStore();
    const { str } = useThemeX();

    const [toast, setToast] = useState<ToastType>({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const emailRef = useRef<TextInput>(null);

    function addFriendFN() {
        Keyboard.dismiss();
        if (compressTextFN(name).length == 0) setToast({ show: true, msg: str.PLZ_ENTER_NAME });
        else if (compressTextFN(email).length == 0) setToast({ show: true, msg: str.PLZ_ENTER_EMAIL });
        else if (!isValid.EMAIL(compressTextFN(email))) setToast({ show: true, msg: str.PLZ_ENTER_VALID_EMAIL });
        else if (firendsList[email]?.email) setToast({ show: true, msg: str.PLZ_ENTER_UNIQUE_EMAIL });
        else {
            setFriensListData({ [email]: { email, name, id: generateUniqueID(), pImg: getRandomImgFN() } });
            navigation.goBack();
        }
    }

    return (<MasterView title={str.REGISTER} p={bSpace} toast={toast} setToast={setToast} >
        <TextInputX
            phNm={str.ENTER_NAME}
            text={name}
            onChangeT={setName}
            autoCapitalize='words'
            autoComplete='name'
            onSubEdit={() => emailRef.current?.focus()}
            rKeyType='next'
        />
        <TextInputX
            reff={emailRef}
            phNm={str.ENTER_EMAIL}
            text={String(email).toLowerCase()}
            onChangeT={setEmail}
            kbType='email-address'
            autoComplete='email'
            onSubEdit={addFriendFN}
            rKeyType='done'
        />
        <ButtonX
            text={str.SUBMITE}
            onPress={addFriendFN}
        />
    </MasterView>);
}

export default RegisterUserController

const styFN = ({ col, font }: defStyType) => StyleSheet.create({

    regi_cSty: {
        marginTop: 20,
        alignItems: 'center'
    },
    regi_tSty: {
        color: col.D_BLACK,
        textDecorationLine: 'underline'
    }

})