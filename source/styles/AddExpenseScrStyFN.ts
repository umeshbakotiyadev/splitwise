import { defStyType } from "Types";
import { _COL } from "colors";
import { Size } from "functions";
import { StyleSheet } from "react-native";
import { _WIDTH, bSpace, headerHeight } from "utils";

const AddExpenseScrStyFN = ({ font, col, bottom }: defStyType) => StyleSheet.create({

    mainC1: {
        flexDirection: 'row',
        backgroundColor: col.INPUT_BG,
        borderRadius: 10,
        height: 50,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    btnCon1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    btn_tSty: {
        fontFamily: font.REGULAR,
        color: col.D_BLACK,
        fontSize: Size(14)
    },
    padinByMSty: {
        marginTop: 10,
        alignItems: "center"
    },
    paidBy_tSty: {
        color: col.D_BLACK,
        fontFamily: font.LIGHT,
        fontSize: Size(14),
        marginTop: 20
    },
    paidByUserImgSty: {
        height: 30,
        aspectRatio: 1,
        borderRadius: 100,
        overflow: 'hidden'
    },
    selPayBy_mSty: {
        marginVertical: 10,
    },
    selPayBy_cSty: {
        borderRadius: 100,
        padding: 8,
        backgroundColor: col.OP_ITEM_BG,
        flexDirection: 'row',
        alignItems: 'center'
    },
    selPayBy_tSty: {
        color: col.D_BLACK,
        fontFamily: font.MEDIUM,
        fontSize: Size(14),
        paddingHorizontal: 10
    }

});

export default AddExpenseScrStyFN;