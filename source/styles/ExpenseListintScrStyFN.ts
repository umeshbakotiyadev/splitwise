import { defStyType } from "Types";
import { _COL } from "colors";
import { Size } from "functions";
import { StyleSheet } from "react-native";
import { _WIDTH, bSpace, headerHeight } from "utils";

const ExpenseListintScrStyFN = ({ font, col, bottom }: defStyType) => StyleSheet.create({

    t1_cSty: {
        paddingHorizontal: bSpace / 2,
        paddingVertical: 5,
        flexDirection: 'row',
    },
    t1_tSty: {
        fontFamily: font.BOLD,
        fontSize: Size(18),
    },
    t2_tSty: {
        color: col.D_BLACK,
        fontFamily: font.BOLD,
        fontSize: Size(18),
        textTransform: 'capitalize'
    },

});

export default ExpenseListintScrStyFN;