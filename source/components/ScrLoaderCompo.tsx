import { ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import Animated, { Easing, FadeOut, ReduceMotion, useDerivedValue, withTiming } from 'react-native-reanimated'
import { useThemeX } from 'hooks'
import { IS_DEV } from 'utils';

interface P {
    loading?: boolean;
    absolute?: boolean;
}

const ScrLoaderCompo = ({ absolute, loading = false }: P) => {

    const { col } = useThemeX();

    const opVal = useDerivedValue<number>(() => withTiming(
        loading ? 1 : 0, {
        duration: 480,
        easing: Easing.inOut(Easing.circle),
        reduceMotion: ReduceMotion.Never,
    }), [loading]);

    if (!loading) return null;

    return (<Animated.View
        // entering={FadeIn}
        exiting={FadeOut}
        style={[
            StyleSheet.absoluteFill,
            IS_DEV ? {} : { opacity: opVal },
            {
                alignItems: 'center', justifyContent: 'center',
                backgroundColor: absolute ? col.BLACK05 : undefined,
                zIndex: 9999
            }]}>
        <ActivityIndicator color={absolute ? col.WHITE : col.SECONDARY} />
    </Animated.View>
    )
}

export default React.memo(ScrLoaderCompo);