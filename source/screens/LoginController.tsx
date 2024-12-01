import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { ButtonX, MasterView, PressX, TextInputX, ViewX } from 'components'
import { useThemeX } from 'hooks'
import { defStyType, StackProps, ToastType } from 'Types'
import useAppStore from 'store'
import { compressTextFN, isValid } from 'functions'
import { bSpace } from 'utils'

const LoginController = ({ navigation }: StackProps<'LoginScr'>) => {

    const { setUserData, firendsList, setLogin } = useAppStore();
    const { str, defStyObj } = useThemeX();
    const sty = styFN(defStyObj);

    const [toast, setToast] = useState<ToastType>({});
    const [email, setEmail] = useState("");

    function loginFN() {
        if (compressTextFN(email).length == 0) setToast({ show: true, msg: str.PLZ_ENTER_EMAIL });
        else if (!isValid.EMAIL(compressTextFN(email))) setToast({ show: true, msg: str.PLZ_ENTER_VALID_EMAIL });
        else if (!!firendsList[email]) { setUserData(firendsList[email]); setLogin(true); }
        else setToast({ show: true, msg: str.USER_NOT_FOUND_TRY_AGAIN });
    }

    return (<MasterView title={str.LOGIN} fixed backBtn={false} jfy='center'
        toast={toast} setToast={setToast} p={bSpace} >
        <ViewX>
            <TextInputX
                phNm={str.ENTER_EMAIL}
                text={String(email).toLowerCase()}
                onChangeT={setEmail}
                kbType='email-address'
                autoComplete='email'
                onSubEdit={loginFN}
                rKeyType='done'
                inputSty={{ textAlign: 'center' }}
                style={{ height: 40 }}
            />
            <ButtonX text={str.LOGIN} onPress={loginFN} />
            <PressX
                onPress={() => navigation.navigate('RegisterUserScr')}
                text={str.REGISTER_NEW_USER}
                tSty={sty.regi_tSty}
                cSty={sty.regi_cSty} />
        </ViewX>

    </MasterView>);
}

export default LoginController

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