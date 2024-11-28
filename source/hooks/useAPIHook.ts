import { BackHandler, Platform } from 'react-native'
import { ApiCallType, ApiResType } from 'Types';
import { LOG, isErr, toJSON } from 'functions';
import { useThemeX } from 'hooks';
import { IS_DEV, isANDROID, isIOS } from 'utils';
import { useEffect, useRef } from 'react';
import { BASE_API_DEV, BASE_API_PROD } from '@env';

const useAPIHook = () => {

    const { abort, signal } = new AbortController();
    const { str } = useThemeX();

    const request = useRef(new XMLHttpRequest());

    // END-POINTS
    const GET_ALL_USERS = "getUsersList";

    const headR = (token?: string, urlencoded?: boolean, multipart?: boolean) => {
        var Header = new Headers();
        Header.append("Accept", "application/json");
        if (multipart) Header.append("Content-Type", "multipart/form-data");
        else Header.append("Content-Type", urlencoded ? "application/x-www-form-urlencoded" : "application/json");
        token && Header.append("Authorization", `Bearer ${token}`);
        return Header;
    };

    /**
     * @param props.endPath for api end path
     * @param props.body for parms to send to the server
     * @param props.isFormData check params is passed or not
     * @param props.toText for get return responce on toText() 
     * @param props.token for token passed
     * @param props.method for api method like POST or PUT or PATCH or DELETE or PATCH
     * Todo return response is based on api response
     * Todo return response is as a Object.
     */
    async function fetchREQ({ endPath, body, toText, token, method = 'POST', urlencoded = true, params, multipart, apiURI }: ApiCallType): Promise<ApiResType> {
        try {
            let raw = {
                method: method,
                headers: headR(token, urlencoded, multipart),
                body: urlencoded ? body : JSON.stringify(body),
                signal,
            };
            let rawNoBody = {
                method: method,
                headers: headR(token, urlencoded, multipart),
                signal,
            };
            let resJSON;

            // console.log(`headR:::`, Platform.OS, "::", headR(token, urlencoded, multipart));
            // console.log(`resBODY:::`, Platform.OS, "::", endPath, "::", "body::", JSON.stringify(body, null, 5), "\n", "params::", params);

            const url = (apiURI ? apiURI : ((IS_DEV ? BASE_API_DEV : BASE_API_PROD) + endPath)) + (params ? `${'?' + params}` : '');
            // console.log("uri::", url);

            let res: any = await fetch(url, body ? raw : rawNoBody);
            // console.log(`res:::`, Platform.OS, "::", endPath, "::", await res?.text(), JSON.stringify(res, null, 5));

            if (res !== undefined && (res.status === 200 || res.status === 202)) resJSON = toText ? await res?.text() : await res?.json();
            else resJSON = toText ? await res?.text() : await res?.json();
            // console.log(`res:::`, Platform.OS, "::", endPath, "::", JSON.stringify(res, null, 5));
            // console.log(`resJSON:::`, Platform.OS, "::", endPath, "::", JSON.stringify(resJSON, null, 5));

            return {
                code: res?.status,
                res: resJSON,
                url: res?.url,
                status: resJSON?.statusCode || 0,
                message: resJSON?.message || "",
                err: isErr(res?.status),
            };

        } catch (err: any) {
            console.log(`Error:: ${Platform.OS} :: ${endPath} ::: `, err);
            return { code: 404, res: undefined, url: "", status: false, err: true, message: err?.message };
        }
    }

    /** THIS IS FOR ABORT API CALL */
    function abortAPI() { try { abort(); } catch (e) { /* LOG(e, "ERROR :: abortAPI =>>"); */ } }

    /**
     * THIS IS FOR WHEN USER CALL ANY API IN SCR AND 
     * HIT BACK BTN THEN API CALLING IS EMIDIATLY ABORT 
     **/
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { abortAPI(); return false; });
        return () => { abortAPI(); backHandler.remove(); }
    }, [signal]);

    return {
        request, fetchREQ, abortAPI,
    }
}

export default useAPIHook