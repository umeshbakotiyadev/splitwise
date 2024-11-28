import { ViewXType, colorType, firendsListOBJType, firendsListType } from "Types";
import { strType } from "language";
import { Dimensions, Linking, Platform, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { IS_DEV } from "utils";

const _HEIGHT = Dimensions.get('window').height;
const _WIDTH = Dimensions.get('window').width;

const Size = (num: number) => RFValue(num, _HEIGHT);

const toJSON = (map: Map<any, any>) => {
    `worklet`
    return JSON.parse(JSON.stringify(Object.fromEntries(map)));
};

const LOG = (any: any, TITLE: string = ""): void => { try { (!IS_DEV ? undefined : console.log(TITLE, JSON.stringify(any, null, 2))); } catch (e) { console.log("LOG<-->ERR") } };

const isValidUrl = (urlString: string) => {
    var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
    return !!urlPattern.test(urlString);
}

const isUrl = (urlString: string): boolean => {
    try {
        const newUrl = new URL(urlString);
        return (Boolean(newUrl) && String(newUrl)?.includes('http:') || String(newUrl)?.includes('https:')) || isValidUrl(urlString);
    }
    catch (e) {
        return false;
    }
}

function deepClone<T>(arr: T[]): T[] {
    return arr.map((item) => {
        if (Array.isArray(item)) {
            return deepClone(item); // Recursively clone nested arrays
        } else if (typeof item === 'object' && item !== null) {
            // return { ...item }; // Shallow clone objects
            return JSON.parse(JSON.stringify(item)); // Deep clone objects
        } else {
            return item; // Non-array, non-object elements can be directly copied
        }
    });
};

const isValid = {
    EMAIL: function (str: string) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return pattern.test(str);  // returns a boolean
    },
    NOT_EMPTY: function (str: string) {
        var pattern = /\S+/;
        return pattern.test(str);  // returns a boolean
    },
    NUMBER: ({ max = 999999999, min = 0, text = '' }: { max?: number, min?: number, text: string }) => {
        const pattern = new RegExp(`^[0-9]{${min},${max}}$`);
        return pattern.test(text);
    },
    NUMBER2: function (str: string) {
        var pattern = /^\d+\.?\d*$/;
        return pattern.test(str);  // returns a boolean
    },
};

const defStyFN = ({
    exiting, entering, children, style,
    p, pB, pT, pL, pR, pH, pV, pS, pE, m, mB, mT, mL, mR, mH, mV, mS, mE, bgCol,
    aItem, jfy, pos, top, bottom, right, left, zIdx, bR, bWidth, bCol, oFlow,
    fD, fG, h, w, f = undefined, ar, aSelf, maxW, maxH, minH, minW
}: ViewXType): ViewStyle => ({
    flex: f,
    width: w || undefined,
    height: h,
    minHeight: minH,
    maxHeight: maxH,
    minWidth: minW,
    maxWidth: maxW,
    flexDirection: fD,
    flexGrow: fG,
    aspectRatio: ar,
    padding: p, paddingBottom: pB, paddingTop: pT, paddingLeft: pL, paddingRight: pR, paddingHorizontal: pH, paddingVertical: pV, paddingStart: pS, paddingEnd: pE,
    margin: m, marginBottom: mB, marginTop: mT, marginLeft: mL, marginRight: mR, marginHorizontal: mH, marginVertical: mV, marginStart: mS, marginEnd: mE,
    backgroundColor: bgCol,
    top, bottom, left, right, zIndex: zIdx,
    position: pos,
    alignItems: aItem,
    justifyContent: jfy,
    alignSelf: aSelf,
    borderRadius: bR,
    borderColor: bCol,
    borderWidth: bWidth,
    overflow: oFlow,
});

const isErr = (e: number) => {
    switch (e) {
        case 400: return true;
        case 404: return true;
        default: return false;
    }
}

function generateUniqueID(uniqueKey: string | number = "") {
    const currentDate = new Date();
    const timestamp = currentDate.getTime(); // Get current timestamp
    const randomNum = Math.floor(Math.random() * 10000); // Generate a random number (0-9999)
    const uniqueID = `${String(uniqueKey)}_${timestamp}_${randomNum}`;
    return uniqueID;
}

const toNum = (num: number, maximumFractionDigits = 2, minimumFractionDigits?: number): string => {
    return new Intl.NumberFormat('en-US', { maximumFractionDigits, minimumIntegerDigits: num === 0 ? 2 : undefined, minimumFractionDigits/* , notation: 'compact' */ }).format(num);
};

const cardShadow = (col: colorType) => ({
    shadowColor: col.D_BLACK,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
});

const compressTextFN = (text?: any) => String(text || "").replace(/\s+/g, '').toLowerCase();

function makeFriendsListForLocalStoreFN(data: Array<firendsListType>): firendsListOBJType {
    const dataOBJ: firendsListOBJType = {};
    data.forEach(ele => {
        // if (!ele?.id) return;
        dataOBJ[ele?.id ?? generateUniqueID()] = ele;
    });
    return dataOBJ;
}

export {
    isUrl, Size, deepClone, isValid, defStyFN, _WIDTH, _HEIGHT, isErr,
    generateUniqueID, toNum, cardShadow, toJSON, compressTextFN, LOG,
    makeFriendsListForLocalStoreFN
}