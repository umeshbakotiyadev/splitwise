import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import ViewXCompo from './XCompos/ViewXCompo'
import Animated, { FadeIn, FadeInDown, FadeOutDown, } from 'react-native-reanimated'
import { ToastType, defStyType } from 'Types';
import TextXCompo from './XCompos/TextXCompo';
import { _WIDTH } from 'functions';
import { useThemeX } from 'hooks';
import { WARNING_IC } from 'assets';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

/**
 * Custom Alert Box(Toast) Component
 **/
const AlertBoxCompo = ({ msg, show, showIC = true, setToast = () => { },
    timeOut, isTimeOut = true, bgCol, cSty, absolute = true, msg_tSty,
    children, entering, exiting, icCol, onPress }: ToastType) => {

    const { col, cpSty } = useThemeX();
    const sty = styFN(useThemeX().defStyObj);

    useEffect(() => {
        if (isTimeOut) {
            show && setTimeout(() => setToast({ show: false }), timeOut ?? 2000);
        }
    }, [show])

    if (!show) return <></>

    return (
        <AnimatedTouchableOpacity
            entering={entering ? entering : (absolute ? FadeInDown : FadeIn)}
            exiting={exiting ? exiting : (absolute ? FadeOutDown : undefined)}
            onPress={onPress} activeOpacity={1}
            style={[
                absolute ? cpSty.alertBanner_abContainerSty : cpSty.alertBanner_containerSty,
                { backgroundColor: bgCol ? bgCol : col.ALERTBOX_BG },
                cSty ? cSty : {},
            ]}>
            {children ? children : (<>
                {showIC ? <WARNING_IC color={icCol} /> : null}
                <TextXCompo text={msg} tSty={{ ...cpSty.alertBanner_msg_tSty, ...msg_tSty }} />
            </>)}
        </AnimatedTouchableOpacity>
    );

    return (
        <ViewXCompo
            entering={entering ? entering : (absolute ? FadeInDown : FadeIn)}
            exiting={exiting ? exiting : (absolute ? FadeOutDown : undefined)}
            style={[absolute ? cpSty.alertBanner_abContainerSty : cpSty.alertBanner_containerSty, cSty]}
            bgCol={bgCol ?? col.ALERTBOX_BG}>
            {children ? children : <>
                {showIC && <WARNING_IC />}
                <TextXCompo text={msg} tSty={{ ...cpSty.alertBanner_msg_tSty, ...msg_tSty }} />
            </>
            }
        </ViewXCompo>
    )
}

export default React.memo(AlertBoxCompo)

const styFN = ({ font, col, bottom }: defStyType) => StyleSheet.create({



})