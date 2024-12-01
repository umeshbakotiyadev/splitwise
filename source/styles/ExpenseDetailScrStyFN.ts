import { defStyType } from "Types";
import { _COL } from "colors";
import { Size } from "functions";
import { StyleSheet } from "react-native";
import { _WIDTH, bSpace, headerHeight } from "utils";

const ExpenseDetailScrStyFN = ({ font, col, bottom }: defStyType) => StyleSheet.create({

    expDescription: {
        color: col.D_BLACK,
        fontFamily: font.BOLD,
        fontSize: Size(18)
    },
    payBy_tSty: {
        color: col.D_BLACK,
        fontFamily: font.REGULAR,
        fontSize: Size(20)
    },
    expSharingUser_tSty: {
        color: col.D_BLACK,
        fontFamily: font.REGULAR,
        fontSize: Size(16),
        paddingVertical: 3
    },
    expSharingUser_mSty: {
        padding: 10,
        backgroundColor: col.OP_ITEM_BG,
        borderRadius: 10,
        marginVertical: 10
    }

});

export default ExpenseDetailScrStyFN;