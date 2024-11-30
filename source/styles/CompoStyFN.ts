import { defStyType } from "Types";
import { _COL } from "colors";
import { Size } from "functions";
import { StyleSheet } from "react-native";
import { _WIDTH, bSpace, headerHeight } from "utils";

const CompoStyFN = ({ font, col, bottom }: defStyType) => StyleSheet.create({

    headerBtn_cSty: {
        // backgroundColor: 'red',
        padding: bSpace / 2,
        // aspectRatio: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        aspectRatio: 1,
        width: (headerHeight / 2),
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerBtn_mSty: {
        overflow: 'hidden',
        borderRadius: 100,
    },

    header_title_tSty: {
        fontFamily: font.REGULAR,
        fontSize: Size(20),
        color: col.HEADER_TITLE
    },

    cpTitle: {
        fontFamily: font.BOLD,
        fontSize: Size(14),
        color: col.PLATINUM_GREY,
        paddingBottom: 10,
        textTransform: 'uppercase'
    },
    cpContainer: {
        backgroundColor: col.D_WHITE,
        borderRadius: 10,
        marginVertical: 7
    },
    rowACenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    w100CfRow: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    hw100: {
        height: "100%",
        width: "100%",
    },
    hDivider: {
        width: "100%",
        height: 1,
        backgroundColor: col.BLACK02
    },

    inputSty1: {
        flex: 1,
        fontSize: Size(18),
        color: col.D_BLACK,
        fontFamily: font.REGULAR,
        // dont increase padding,
        // if you remove then padding is incrase i android
        padding: 0
    },

    /**
     * bottomSheetItem Style
     **/
    oneItem_mSty: {
        paddingHorizontal: bSpace
    },
    oneItem_cSty: {
        width: "100%",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: col.D_WHITE,
        borderRadius: 10
    },
    oneItem_tSty: {
        fontFamily: font.MEDIUM,
        color: col.DEEP_SEA_BLUE,
        fontSize: Size(14),
    },
    onteItemHeader_tSty: {
        fontFamily: font.BOLD,
        color: col.D_BLACK,
        fontSize: Size(14),
        paddingHorizontal: bSpace,
        paddingVertical: bSpace / 2
    },

    emptyListMSG_cSty: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    emptyListMSG_tSty: {
        fontFamily: font.REGULAR,
        fontSize: Size(14),
        color: col.D_BLACK,
        textAlign: 'center',
    },

    /**
     * LOCAK USER CHAT ALERT BANNER STYLES
     **/
    lockUserChat_alertTextSty: {
        fontFamily: font.REGULAR,
        fontSize: Size(16),
        color: col.BLACK,
        textAlign: 'center',
        maxWidth: _WIDTH * .7
    },
    lockUserChat_alert_cSty: {
        flexDirection: 'column',
        alignItems: 'center',
        bottom: bSpace + bottom + 50,
        backgroundColor: col.LIGHT_RED,
    },

    /** 
     * ALERT BOX STYLES 
    **/
    alertBanner_abContainerSty: {
        alignSelf: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: col.BLACK01,
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: bottom + bSpace
    },
    alertBanner_containerSty: {
        alignSelf: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: col.BLACK01,
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20,
    },
    alertBanner_msg_tSty: {
        fontFamily: font.REGULAR,
        fontWeight: '400',
        fontSize: Size(13),
        paddingLeft: 10,
        color: col.DEEP_SEA_BLUE,
        maxWidth: _WIDTH * .7
    },

    /**
     * FILL CENTER ABSOLUTELY
     **/
    Absolute_h100w100Ctr: {
        height: "100%",
        width: "100%",
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heartImg: {
        width: _WIDTH * .2,
        height: _WIDTH * .2,
        shadowRadius: _WIDTH,
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 20 },
        position: 'absolute',
        alignSelf: 'center',
        top: (((1080 > _WIDTH) ? _WIDTH : 1080) / 2) - _WIDTH * .1,
        backgroundColor: _COL.TRANSPARENT
    }
});

export default CompoStyFN;