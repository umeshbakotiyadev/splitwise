import { View, StyleSheet } from 'react-native'
import React, { ReactNode, useCallback } from 'react'
import { useThemeX } from 'hooks';
import { _WIDTH } from 'utils';
import { defStyType } from 'Types';
import ViewXCompo from 'components/XCompos/ViewXCompo';
import { GROUP_IC, PERSON_IC, PROFILE_IC } from 'assets';
import { PressX } from 'components';

const CustomizeBottomTabBar = ({ state, descriptors, navigation }: any) => {

    const { col, font, str, defStyObj, bottom } = useThemeX();
    const sty = styFN(defStyObj);

    const getTabs = useCallback(() => state?.routes?.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused: boolean = state.index === index;

        function getIcon(name: string): { svg: ReactNode } {
            switch (name) {
                case 'FriendsListingScr': return ({ svg: <PERSON_IC color={isFocused ? col.D_BLACK : col.D_WHITE} /> })
                case 'GroupListingScr': return ({ svg: <GROUP_IC color={isFocused ? col.D_BLACK : col.D_WHITE} /> })
                case 'ProfileScr': return ({ svg: <PROFILE_IC color={isFocused ? col.D_BLACK : col.D_WHITE} /> })
                default: return { svg: <></> };
            }
        }

        const onPress = () => {
            const event = navigation.emit({ type: 'tabPress', target: route.key });
            if (!isFocused && !event.defaultPrevented) navigation.navigate(route.name);
        };

        return (
            <PressX key={index.toString()} onPress={onPress}
                mSty={sty.btnMSty} cSty={sty.btnCSty} bgCol={isFocused ? col.PRIMARY : col.FOURTH} >
                {getIcon(route?.name)?.svg}
            </PressX>)
    }), [state, navigation, descriptors]);

    return (
        <View style={[sty.mainContainer]} >
            <ViewXCompo style={sty.iconContainer} >
                {getTabs()}
            </ViewXCompo>
            <ViewXCompo h={bottom} bgCol={col.WHITE} />
        </View>
    );
}

export default CustomizeBottomTabBar

const styFN = ({ col, font, bottom }: defStyType) => StyleSheet.create({

    mainContainer: {
        height: 55 + bottom,
        justifyContent: 'center',
        backgroundColor: col.BOOTOM_TAB_BG,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    btnMSty: {
        justifyContent: 'center',
    },
    btnCSty: {
        alignItems: 'center',
        padding: 2,
        paddingHorizontal: 30,
        borderRadius: 100,
    },

})