import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Stack } from 'utils'
import { AddExpenseScr, AddFriendScr, ExpenseDetailsScr, ExpenseListingScr, FriendsListingScr, LoginScr, MakeGroupScr, RegisterUserScr } from 'screens'
import useAppStore from 'store'
import BottomTab from './BottomTab'

const AppRoute = () => {

    const { isLogin } = useAppStore();

    return (<NavigationContainer>
        {!isLogin ? (<Stack.Navigator>
            <Stack.Screen name='LoginScr' component={LoginScr} options={{ headerShown: false }} />
            <Stack.Screen name='RegisterUserScr' component={RegisterUserScr} options={{ headerShown: false }} />
        </Stack.Navigator>)
            : (<Stack.Navigator >
                <Stack.Screen name={"BottomTab"} component={BottomTab} options={{ headerShown: false }} />
                <Stack.Screen name={"FriendsListingScr"} component={FriendsListingScr} options={{ headerShown: false }} />
                <Stack.Screen name={"AddFriendScr"} component={AddFriendScr} options={{ headerShown: false }} />
                <Stack.Screen name={"ExpenseListingScr"} component={ExpenseListingScr} options={{ headerShown: false }} />
                <Stack.Screen name={"AddExpenseScr"} component={AddExpenseScr} options={{ headerShown: false }} />
                <Stack.Screen name={"MakeGroupScr"} component={MakeGroupScr} options={{ headerShown: false }} />
                <Stack.Screen name={"ExpenseDetailsScr"} component={ExpenseDetailsScr} options={{ headerShown: false }} />
            </Stack.Navigator>)
        }
    </NavigationContainer>);
}

export default AppRoute