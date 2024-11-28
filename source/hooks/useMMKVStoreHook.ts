import React, { useCallback, useMemo } from 'react'
import { useMMKVBoolean, useMMKVObject } from 'react-native-mmkv';

const useMMKVStoreHook = () => {

    const [isAbleToCurrentPurchaseAPI_, setIsAbleToCurrentPurchaseAPI] = useMMKVBoolean("@IsAbleToCurrentPurchaseAPI");

    const isAbleToCurrentPurchaseAPI: boolean = useMemo(() => !!isAbleToCurrentPurchaseAPI_, [isAbleToCurrentPurchaseAPI_]);

    return ({
        isAbleToCurrentPurchaseAPI, setIsAbleToCurrentPurchaseAPI,
    })
}

export default useMMKVStoreHook