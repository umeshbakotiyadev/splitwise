import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { D_Colors, L_Colors, _COL } from 'colors';
import { useColorScheme } from 'react-native';
import { FONT } from 'assets';
import { useMemo } from 'react';
import { defStyType } from 'Types';
import useString from 'language';

/**
 * CONFIG FOR ALL THEMES RELATED GLOBAL VARIABLES OR MORE.
 * LIKE COLORS, FOTNS, STYLES, BOTTOM OR TOP NANIGATION BAR HEIGHT.
 **/
const useThemeXHook = () => {

    const sAI = useSafeAreaInsets();
    const theme = useColorScheme();
    const str = useString();

    /** GET VALUE BASED ON THEME MODE */
    const dwFN = (d: any, w: any) => theme === 'dark' ? d : w;

    const font = FONT;

    /** THIS IS FOR DYNAMIC COLORS BASED ON THEME MODE -*LIGHT/DARK*- */
    // const col: typeof _COL & typeof D_Colors = useMemo(() => theme === 'dark' ? { ..._COL, ...D_Colors } : { ..._COL, ...L_Colors }, [theme])

    /** SIMPLY USE COLORS */
    const col: typeof _COL & typeof D_Colors = useMemo(() => ({ ..._COL, ...L_Colors }), []);

    /** THIS IS FOR DYNAMIC VARIABLES USE IN STYLES FUNCTIONS */
    const defStyObj: defStyType = { ...sAI, col, font, dwFN };

    // const sInSty = SignInFlowStyFN(defStyObj);

    return ({
        ...sAI, defStyObj, font, col, theme, dwFN, str,
    });

}

export default useThemeXHook