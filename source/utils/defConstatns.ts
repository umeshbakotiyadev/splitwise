import { _COL } from 'colors';
import { Size } from 'functions';
import { AppStackParamListType, IAppStateType, ViewXType, appStoreType, kBehaviorType, setIAppStateType } from 'Types';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const IS_DEV: boolean = true;

const Stack = createNativeStackNavigator<AppStackParamListType>();
const BottomTabStack = createBottomTabNavigator();

const _HEIGHT = Dimensions.get('window').height;
const _WIDTH = Dimensions.get('window').width;

const kAvoidSty: kBehaviorType = Platform.OS === "ios" ? "padding" : undefined;
const hLine = StyleSheet.hairlineWidth;
const bSpace = Size(21);
const BtnHeight = 40;
const headerHeight = 48;

const TENNIS_PAL_SUPPORT_CHAT_ID = IS_DEV ? "661bc7adf37c8e6cb08f1f86" : "662b556d410a1518746bcd59";

const androidAPIVersion = (typeof Platform?.Version === 'number') ? Platform?.Version : parseInt(Platform?.Version);
const isANDROID = Platform.OS === 'android' ? true : false;
const isIOS = Platform.OS === 'ios' ? true : false;

const initialState: IAppStateType = {
    appName: "useStore@Dev",
    firendsList: {},
    expenses: {},
    isLogin: false,
    userData: {
        email: "",
    },
    groupList:{},
};

const setInitialState: setIAppStateType = {
    setFriensListData(by) { },
    setUserData(by) { },
    setExpense(by) { },
    setResetExpenses(by) { },
    setResetFriensListData(by) { },
    setLogin(by) { },
    setGroupList(by) { },
    setResetGroupList(by) { },
}

const appStoreObj: appStoreType = { ...initialState, ...setInitialState };

const defStyObj: ViewXType = ({
    entering: undefined, exiting: undefined, children: undefined, style: undefined, bgCol: undefined,
    fD: undefined, h: undefined, w: undefined, f: undefined, ar: undefined,
    maxW: undefined, maxH: undefined, minH: undefined, minW: undefined,
    p: undefined, pB: undefined, pT: undefined, pL: undefined, pR: undefined, pH: undefined, pV: undefined, pS: undefined, pE: undefined,
    m: undefined, mB: undefined, mT: undefined, mL: undefined, mR: undefined, mH: undefined, mV: undefined, mS: undefined, mE: undefined,
    top: undefined, bottom: undefined, right: undefined, left: undefined, zIdx: undefined, bR: undefined,
    bWidth: undefined, bCol: undefined, oFlow: undefined,
    aSelf: undefined, aItem: undefined, jfy: undefined, pos: undefined,
})

const MIN_SEARCH_RADIUS = 5;
const MAX_SEARCH_RADIUS = 50;

const MIN_SKILL_LEVEL = 1.0;
const MAX_SKILL_LEVEL = 7.5;

const MIN_AGE = 18;
const MAX_AGE = 80;

const skillLevelNTRPArr = ['0', '1.0', '1.5', '2.0', '2.5', '3.0', '3.5', '4.0', '4.5', '5.0', '5.5', '6.0', '6.5', '7.0', '7.5'];

const matchTypeArr = ["single", "doubles"];

const durationArr = [3, 6, 12, 24, 36, 48];

const SendMessageHeight = 49;

const AddPostDescriptionLimit = 500;

const currentDate = new Date();
const maximumBirthDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());

export {
    Stack, _HEIGHT, _WIDTH, kAvoidSty, hLine, bSpace, initialState, defStyObj, headerHeight, BtnHeight,
    BottomTabStack, MIN_SKILL_LEVEL, MAX_SKILL_LEVEL, skillLevelNTRPArr, MIN_AGE, MAX_AGE,
    durationArr, SendMessageHeight, currentDate, maximumBirthDate, androidAPIVersion, isIOS,
    isANDROID, appStoreObj, setInitialState, MIN_SEARCH_RADIUS, MAX_SEARCH_RADIUS, matchTypeArr,
    AddPostDescriptionLimit, IS_DEV, TENNIS_PAL_SUPPORT_CHAT_ID
}