import { _WIDTH } from "functions";
import { StyleSheet } from "react-native";
import { defStyType } from "Types";
import { bSpace } from "utils";

const FriendListingScrStyFN = ({ font, col, bottom }: defStyType) => StyleSheet.create({

    addExpenseBtn_mSty: {
        flex: undefined,
        marginVertical: bSpace / 2,
        marginHorizontal: bSpace,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    addExpenseBtn_cSty: {
        padding: 8,
        backgroundColor: col.PRIMARY,
        borderRadius: 10
    },

});
export default FriendListingScrStyFN;