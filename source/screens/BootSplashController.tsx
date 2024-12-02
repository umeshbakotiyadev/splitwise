import { Animated, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import BootSplash from "react-native-bootsplash";
import { useThemeX } from 'hooks';
import { APP_LOGO } from 'assets';
import StatusBarXCompo from 'components/XCompos/StatusBarXCompo';


const BootSplashController = ({ onAnimationEnd }: { onAnimationEnd: () => void; }) => {


    const { col } = useThemeX();
    const [opacity] = useState(() => new Animated.Value(1));

    const BootSplaceJSON = {
        "background": col.D_WHITE,
        "logo": { "width": 100, "height": 83 }
    }

    const { container, logo } = BootSplash.useHideAnimation({
        logo: APP_LOGO,
        manifest: BootSplaceJSON,
        statusBarTranslucent: true,
        navigationBarTranslucent: false,
        animate: () => {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }).start(onAnimationEnd);
        },
    });

    return <Animated.View {...container} style={[container.style, { opacity, zIndex: 9999 }]}>
        <StatusBarXCompo barStyle="light-content" sbColor={col.D_WHITE} sbTransition={"fade"} sbShow />
        <Image {...logo} />
    </Animated.View >
}

export default BootSplashController