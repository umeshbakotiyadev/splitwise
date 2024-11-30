import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Stack } from 'utils'
import { AddExpenseScr, AddFriendScr, ExpenseListingScr, FriendsListingScr, LoginScr, MakeGroupScr, RegisterUserScr } from 'screens'
import useAppStore from 'store'
import BottomTab from './BottomTab'
import { LOG } from 'functions'

const AppRoute = () => {

    const store = useAppStore();
    const { setUserData, setResetExpenses, setResetFriensListData, setLogin, isLogin, setResetGroupList } = useAppStore();

    // LOG(store?.groupList);
    LOG(store?.expenses, "expenses::");

    useEffect(() => {
        // setResetExpenses({});
        // setResetFriensListData({});
        // setUserData({});
        // setLogin(false);
        // setResetGroupList({})
    }, []);

    return (<NavigationContainer>
        {!isLogin ? (<Stack.Navigator>
            <Stack.Screen name='LoginScr' component={LoginScr} options={{ headerShown: false }} />
            <Stack.Screen name='RegisterUserScr' component={RegisterUserScr} options={{ headerShown: false }} />
        </Stack.Navigator>)
            : (<Stack.Navigator /* initialRouteName='AddExpenseScr' */>
                <Stack.Screen name={"BottomTab"} component={BottomTab} options={{ headerShown: false }} />
                <Stack.Screen name={"FriendsListingScr"} component={FriendsListingScr} options={{ headerShown: false }} />
                <Stack.Screen name={"AddFriendScr"} component={AddFriendScr} options={{ headerShown: false }} />
                <Stack.Screen name={"ExpenseListingScr"} component={ExpenseListingScr} options={{ headerShown: false }} />
                <Stack.Screen name={"AddExpenseScr"} component={AddExpenseScr} options={{ headerShown: false }} />
                <Stack.Screen name={"MakeGroupScr"} component={MakeGroupScr} options={{ headerShown: false }} />
            </Stack.Navigator>)
        }
    </NavigationContainer>);
}

export default AppRoute