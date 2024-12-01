import React from 'react'
import { BottomTabStack } from 'utils'
import CustomizeBottomTabBar from './CustomizeBottomTabBar'
import { FriendsListingScr, GroupListingScr, ProfileScr } from 'screens'
import { StackProps } from 'Types'

/** Bottom Tab Navigator */
const BottomTab = ({ }: StackProps<'BottomTab'>) => {

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