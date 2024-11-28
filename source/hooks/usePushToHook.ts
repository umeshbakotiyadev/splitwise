import { useRef } from "react";

function usePushHook(nav: any) {
    const busy = useRef(false);
    const toNav = (to: string, obj: any = {}) => {
        busy.current = true;
        nav?.push(to, obj);
    }
    const pushTo = async (to: string, i?: any) => {
        setTimeout(() => busy.current = false, 700);
        if (!busy.current) toNav(to, i);
    }
    return pushTo;
}

export default usePushHook;