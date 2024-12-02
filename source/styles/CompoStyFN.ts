import { defStyType } from "Types";
import { _COL } from "colors";
import { Size } from "functions";
import { StyleSheet } from "react-native";
import { _WIDTH, bSpace, headerHeight } from "utils";

const CompoStyFN = ({ font, col, bottom }: defStyType) => StyleSheet.create({

    headerBtn_cSty: {
        padding: bSpace / 2,
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

        height: "100%",
        fontSize: Size(18),
        color: col.D_BLACK,
        fontFamily: font.REGULAR,

        // dont increase padding,
        // if you remove then padding is incrase i android
        padding: 0
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
     * ALERT BOX STYLES 
    **/
    alertBanner_abContainerSty: {
        alignSelf: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: col.TOAST_OUTLINE,
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
        borderColor: col.TOAST_OUTLINE,
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20,
    },
    alertBanner_msg_tSty: {
        fontFamily: font.REGULAR,
        fontWeight: '400',
        fontSize: Size(13),
        paddingLeft: 10,
        color: col.TOAST_TEXT,
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