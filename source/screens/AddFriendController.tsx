import { Keyboard, StyleSheet, TextInput, } from 'react-native'
import React, { useRef, useState } from 'react'
import { ButtonX, MasterView, TextInputX } from 'components'
import { useThemeX } from 'hooks'
import { bSpace } from 'utils'
import useAppStore from 'store'
import { compressTextFN, generateUniqueID, getRandomImgFN, isValid } from 'functions'
import { StackProps, ToastType } from 'Types'

const AddFriendController = ({ navigation, route }: StackProps<'AddFriendScr'>) => {

    const { str } = useThemeX();
    const { setFriensListData, firendsList } = useAppStore();

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

    return (<MasterView title={str.ADD_FRIEND} p={bSpace}
        toast={toast} setToast={setToast} >
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
    </MasterView>)
}

export default AddFriendController

const styles = StyleSheet.create({})