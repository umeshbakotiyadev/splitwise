import React from 'react'
import { BottomTabStack } from 'utils'
import { useThemeX } from 'hooks'
import CustomizeBottomTabBar from './CustomizeBottomTabBar'
import { FriendsListingScr, GroupListingScr, ProfileScr } from 'screens'

/** Bottom Tab Navigator */
const BottomTab = () => {

    const { font, col, str } = useThemeX();
    const isFocused = (is: boolean): string => is ? col.PRIMARY : col.WHITE;

    return (
        <BottomTabStack.Navigator
            tabBar={props => <CustomizeBottomTabBar {...props} />}
            screenOptions={{ headerShown: false }}>
            <BottomTabStack.Screen
                name='FriendsListingScr'
                component={FriendsListingScr}
                initialParams={{ tabScr: true }} />
            <BottomTabStack.Screen
                name='GroupListingScr'
                component={GroupListingScr}
                initialParams={{ tabScr: true }} />
            <BottomTabStack.Screen
                name='ProfileScr'
                component={ProfileScr}
                initialParams={{ tabScr: true }} />
        </BottomTabStack.Navigator>)
}

export default BottomTab