import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Stack } from 'utils'
import { AddExpenseScr, AddFriendScr, ExpenseListingScr, FriendsListingScr } from 'screens'
import useAppStore from 'store'
import { LOG } from 'functions'

const AppRoute = () => {

    const store = useAppStore();
    const { setUserData, setResetExpenses, setResetFriensListData } = useAppStore();

    LOG(store, "store::")

    useEffect(() => {
        // setResetExpenses({});
        // setResetFriensListData({});
        // setUserData({ email:"umesh@gmail.com" });
    }, []);

    return (<NavigationContainer>
        <Stack.Navigator /* initialRouteName='AddExpenseScr' */>
            <Stack.Screen name={"FriendsListingScr"} component={FriendsListingScr} options={{ headerShown: false }} />
            <Stack.Screen name={"AddFriendScr"} component={AddFriendScr} options={{ headerShown: false }} />
            <Stack.Screen name={"ExpenseListingScr"} component={ExpenseListingScr} options={{ headerShown: false }} />
            <Stack.Screen name={"AddExpenseScr"} component={AddExpenseScr} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>);
}

export default AppRoute