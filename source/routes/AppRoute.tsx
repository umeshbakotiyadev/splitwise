import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Stack } from 'utils'
import { AddFriendScr, ExpenseListingScr, FriendsListingScr } from 'screens'

const AppRoute = () => {
    return (<NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={"FriendsListingScr"} component={FriendsListingScr} options={{ headerShown: false }} />
            <Stack.Screen name={"AddFriendScr"} component={AddFriendScr} options={{ headerShown: false }} />
            <Stack.Screen name={"ExpenseListingScr"} component={ExpenseListingScr} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>);
}

export default AppRoute