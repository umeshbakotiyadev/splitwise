import { BottomSheetHandleProps, BottomSheetProps } from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { StackScreenProps } from "@react-navigation/stack";
import { FONT } from "assets/fonts";
import { D_Colors, _COL } from "colors";
import React, { ReactNode } from "react";
import {
    ActivityIndicatorProps, ColorValue, DimensionValue, FlexAlignType, GestureResponderEvent, ImageSourcePropType, KeyboardTypeOptions,
    NativeSyntheticEvent, PressableAndroidRippleConfig, PressableProps, ReturnKeyTypeOptions, ScrollViewProps, StatusBarStyle,
    StyleProp, TextInputFocusEventData, TextInputProps, TextInputSubmitEditingEventData, TextProps, TextStyle, ViewStyle
} from "react-native";
import { ResizeMode, Source } from "react-native-fast-image";
import { AnimateProps, AnimateStyle, SharedValue } from "react-native-reanimated";
import { EdgeInsets } from "react-native-safe-area-context";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

type strUn = string | undefined;
type strNu = string | null;
type strNuUn = string | null | undefined;
type numNu = number | null;
type numUu = number | undefined;
type numNuUn = number | null | undefined;
type boolNn = boolean | null;
type boolUn = boolean | undefined;
type boolNuUn = boolean | null | undefined;

type colorType = typeof _COL & typeof D_Colors;

type kBehaviorType = 'height' | 'position' | 'padding' | undefined;

type AppStackParamListType = {
    FriendsListingScr: any;
    AddFriendScr: any;
    ExpenseListingScr: firendsListItemType;
    AddExpenseScr: firendsListItemType;
};

type StackProps<RouteName extends keyof AppStackParamListType> = (
    StackScreenProps<AppStackParamListType, RouteName, "AppStack">
);

type MasterViewType = {
    scrollViewRef?: any;
    bgCol?: ColorValue;
    bgCol2?: ColorValue;
    bgImgSource?: ImageSourcePropType;
    bgImgUri?: string;
    fixed?: boolean;
    gScroll?: boolean;
    bounces?: boolean;
    onScroll?: ScrollViewProps['onScroll'];
    autoAdujKeyInsets?: boolean | undefined;
    keyboardShouldPersistTaps?: ScrollViewProps['keyboardShouldPersistTaps'];
    scrollEnabled?: ScrollViewProps['scrollEnabled'];
    header?: ReactNode;
    bottomBarColor?: ColorValue;
    modals?: ReactNode;
    bSvg?: ReactNode;
    tSvg?: ReactNode;
    alert?: AlertType;
    setAlert?: (i: AlertType) => void;
    abScrLoader?: boolean;
    abLoader?: boolean;
    scrLoader?: boolean;
    toast?: ToastType;
    setToast?: (i: ToastType) => void;
} & HeaderType & ViewXType;

type StatusBarType = {
    sbShow?: boolean;
    sbColor?: string | undefined;
    barStyle?: StatusBarStyle;
    sbTransition?: "none" | "fade" | "slide" | null | undefined;
}

type HeaderType = {
    hHeight?: number;
    hBgColor?: ColorValue;
    alignText?: FlexAlignType | undefined;
    lHeight?: number;
    rHeight?: number;
    tSty?: TextStyle;
    lSvg?: ReactNode;
    rSvg?: ReactNode;
    backBtn?: boolean;
    bPress?: () => void;
    title?: string;
    titleCompo?: ReactNode;
    hShow?: boolean;
    hShadow?: boolean;
    hMSty?: ViewStyle;
    hBtnColor?: ColorValue;
    backBtnType?: "one" | "two";
    appIcon?: boolean;
    hBgImgSource?: any
    hBgImgURI?: string;
    hBgImgResizeMode?: ResizeMode;
} & StatusBarType;

type TextXType = {
    text?: string | number;
    lChild?: ReactNode;
    rChild?: ReactNode;
    tSty?: TextStyle;
    tProps?: AnimateProps<TextProps>;
    children?: any;
    fColor?: ColorValue;
    fFamily?: string;
    fSize?: number;
    tAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
    lines?: number;
    onLayout?: TextProps['onLayout'];
    autofit?: boolean | SharedValue<boolean | undefined> | undefined
} & ViewXType;

type ViewPfType = { ios: ViewStyle, android: ViewStyle, boath: ViewStyle };

type PressXType = {
    children?: React.ReactNode;
    type?: 'p' | 't' | 'wT';
    text?: string | number | undefined | boolean | null;
    disabled?: boolean;
    loading?: boolean;
    lCol?: ColorValue;
    //* Small has a height of 20, large has a height of 36.
    lSize?: number | 'small' | 'large' | undefined;
    tSty?: TextStyle;
    cSty?: ViewStyle;
    mSty?: ViewStyle;
    hitSlop?: number;
    cProps?: AnimateProps<ViewProps>;
    mProps?: PressableProps;
    tProps?: TextProps;
    lProps?: ActivityIndicatorProps;
    pStyIdx?: number;
    dStyIdx?: number;
    rStyIdx?: number;
    pSty?: (i: { p: boolean }) => ViewStyle;
    rSty?: PressableAndroidRippleConfig;
    // onPress?: () => void;
    // onPressIn?: () => void;
    // onPressOut?: () => void;
    // onLongPress?: () => void;
} & ViewXType;


type defStyType = {
    col: typeof _COL & typeof D_Colors;
    font: typeof FONT;
    dwFN: (d: any, w: any) => any;
} & EdgeInsets;

type paddingType = {
    p?: DimensionValue | undefined;
    pB?: DimensionValue | undefined;
    pT?: DimensionValue | undefined;
    pL?: DimensionValue | undefined;
    pR?: DimensionValue | undefined;
    pH?: DimensionValue | undefined;
    pV?: DimensionValue | undefined;
    pS?: DimensionValue | undefined;
    pE?: DimensionValue | undefined;
}

type marginType = {
    m?: DimensionValue | undefined;
    mB?: DimensionValue | undefined;
    mT?: DimensionValue | undefined;
    mL?: DimensionValue | undefined;
    mR?: DimensionValue | undefined;
    mH?: DimensionValue | undefined;
    mV?: DimensionValue | undefined;
    mS?: DimensionValue | undefined;
    mE?: DimensionValue | undefined;
}

type hwType = {
    h?: DimensionValue | undefined;
    w?: DimensionValue | undefined;
    maxW?: DimensionValue | undefined;
    maxH?: DimensionValue | undefined;
    minH?: DimensionValue | undefined;
    minW?: DimensionValue | undefined;
}

type RadiusTypes = {
    bR?: number | undefined;
};

type PressTypes = {
    onPress?: (i?: any) => void;
    onPressIn?: (i?: any) => void;
    onPressOut?: (i?: any) => void;
    onLongPress?: (i?: any) => void;
}

type ViewXType = {
    fD?: ViewStyle['flexDirection'];
    fG?: ViewStyle['flexGrow'];
    style?: StyleProp<ViewStyle> | undefined;
    children?: ReactNode | undefined;
    entering?: any | undefined;
    exiting?: any | undefined;
    f?: number | undefined;
    bgCol?: string | undefined;
    ar?: number | undefined;
    aItem?: FlexAlignType | undefined;
    jfy?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | undefined;
    aSelf?: ViewStyle['alignSelf'],
    top?: DimensionValue | undefined, bottom?: DimensionValue | undefined, left?: DimensionValue | undefined, right?: DimensionValue | undefined,
    pos?: 'absolute' | 'relative' | undefined;
    oFlow?: 'visible' | 'hidden' | 'scroll' | undefined;
    zIdx?: number | undefined,
    bWidth?: number | undefined;
    bCol?: ColorValue;
} & paddingType & marginType & hwType & RadiusTypes & PressTypes;

type TextInputXType = {
    touchable?: boolean;
    BSInput?: boolean;
    lable?: string;
    phNm?: string;
    text?: string;
    lines?: number;
    onChangeT?: ((text: string) => void);
    reff?: any;
    onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void);
    onSubEdit?: ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void);
    rKeyType?: ReturnKeyTypeOptions;
    kbType?: KeyboardTypeOptions;
    autoComplete?: TextInputProps['autoComplete'];
    autoCorrect?: TextInputProps['autoCorrect'];
    sTxtEntry?: TextInputProps['secureTextEntry'];
    multiline?: TextInputProps['multiline'];
    onFocus?: TextInputProps['onFocus'];
    onPressIn?: TextInputProps['onPressIn'];
    textContentType?: TextInputProps['textContentType'];
    pointerEvents?: TextInputProps['pointerEvents'];
    readOnly?: TextInputProps['readOnly'];
    onLayout?: TextInputProps['onLayout'];
    inputSty?: TextInputProps['style'];
    maxLength?: TextInputProps['maxLength'];
    autoCapitalize?: TextInputProps['autoCapitalize'];
    mSty?: ViewStyle;
    labelNM?: string;
    editable?: boolean;
    lBtn?: ReactNode | React.JSX.Element;
    lBtn_text?: string;
    lBtn_tSty?: TextStyle;
    lBtn_mSty?: ViewStyle;
    lBtn_cSty?: ViewStyle;
    lBtn_loader?: boolean;
    lBtnDis?: boolean;
    lBtnPress?: () => void;
    rBtn?: ReactNode | React.JSX.Element;
    rBtn_text?: string;
    rBtn_tSty?: TextStyle;
    rBtn_mSty?: ViewStyle;
    rBtn_cSty?: ViewStyle;
    rBtn_loader?: boolean;
    rBtnDis?: boolean;
    rBtnPress?: () => void;
    lBtnNode?: ReactNode;
    rBtnNode?: ReactNode;
    lbl_LChild?: ReactNode;
    lbl_RChild?: ReactNode;
    lbl_LSvg?: ReactNode;
    lbl_RSvg?: ReactNode;
    topSvg?: ReactNode;
    bottomSvg?: ReactNode;
    lbl_cSty?: ViewStyle;
    ip_LSvg?: ReactNode;
    ip_RSvg?: ReactNode;
    inputBox?: ReactNode;
    onBoxLayout?: ViewProps['onLayout'];
} & ViewXType;

type AlertType = {
    open?: boolean;
    onClose?: (i: boolean) => void;
    title?: string;
    msg?: string;
    tBtnNm?: string;
    fBtnNm?: string;
    tBtnOnP?: () => void;
    fBtnOnP?: () => void;
    setAlert?: (i: AlertType) => void;
    btnType?: 'both' | 'fill' | 'transparent'
}

type BottomSheetXType = {
    index?: number;
    bRef?: React.Ref<BottomSheetMethods>;
    bgSty?: ViewStyle;
    mSty?: ViewStyle;
    children?: ReactNode | JSX.Element;
    snapPoints: Array<string | number> | SharedValue<Array<string | number>>;
    enablePanDownToClose?: boolean;
    modal?: boolean;
    handleComponent?: React.FC<BottomSheetHandleProps> | null | undefined;
    keyboardBehavior?: BottomSheetProps['keyboardBehavior'];
    onClose?: BottomSheetProps['onClose'];
    android_keyboardInputMode?: BottomSheetProps['android_keyboardInputMode'];
    handleIndicatorStyle?: BottomSheetProps['handleIndicatorStyle'];
    enableDynamicSizing?: BottomSheetProps['enableDynamicSizing'];
    maxDynamicContentSize?: BottomSheetProps['maxDynamicContentSize'];
    style?: StyleProp<AnimateStyle<Omit<ViewStyle, "position" | "top" | "left" | "bottom" | "right" | "opacity" | "flexDirection" | "transform">>>
}

type ApiCallType = {
    endPath?: string;
    body?: any | FormData;
    token?: string;
    urlencoded?: boolean;
    isFormData?: boolean;
    multipart?: boolean;
    toText?: boolean;
    method?: 'POST' | 'PUT' | 'GET';
    params?: string;
    apiURI?: string;
}

type ApiResType = {
    code: number;
    res: any;
    url: string;
    status: boolean;
    err: boolean;
    message: string;
    setProgress?: (i: number) => void;
}

type ToastType = {
    show?: boolean;
    msg?: string;
    isTimeOut?: boolean;
    timeOut?: number;
    setToast?: (i: ToastType) => void;
    showIC?: boolean;
    bgCol?: string;
    cSty?: ViewStyle;
    absolute?: boolean;
    msg_tSty?: TextStyle;
    children?: ReactNode;
    entering?: any | undefined;
    exiting?: any | undefined;
    icCol?: ColorValue;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

type IAppStateType = {
    appName: string;
    isLogin: boolean;
    userData: userData;
    firendsList: firendsListOBJType;
    expenses: expenseSharingOBJType;
}

type setIAppStateType = {
    setFriensListData: (by: firendsListOBJType) => void;
    setResetFriensListData: (by: firendsListOBJType) => void;
    setUserData: (by: userData) => void;
    setExpense: (by: expenseSharingOBJType) => void;
    setResetExpenses: (by: expenseSharingOBJType) => void;
}

type appStoreType = IAppStateType & setIAppStateType;

type firendsListOBJType = { [key: string]: firendsListItemType }

type firendsListItemType = {
    id?: string;
    name?: string;
    email?: string;
    pImg?: any;
}

type userData = {
    email?: string;
};

type expenseSharingUsersType = {
    amount?: number;
    email?: string;
}

type expenseSharingUsersOBJType = { [key: string]: expenseSharingUsersType }

type expenseSharingType = {
    id?:string;
    description?: string;
    payBy?: string;
    splitType?: splitType,
    isGroup?:boolean;
    expenseSharingUsers?: expenseSharingUsersOBJType;
}

type expenseSharingOBJType = { [key: string]: expenseSharingType };

type splitType = "equally" | "unequally";

export type {
    StackProps, AppStackParamListType, appStoreType,
    kBehaviorType, HeaderType, PressXType, ViewPfType, TextXType, MasterViewType,
    StatusBarType, IAppStateType, defStyType, ViewXType, AlertType, TextInputXType,
    ApiCallType, ApiResType, ToastType, colorType, BottomSheetXType, setIAppStateType,
    firendsListOBJType, firendsListItemType, expenseSharingUsersType, expenseSharingType,
    splitType, expenseSharingUsersOBJType, expenseSharingOBJType

}