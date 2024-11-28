import { TextX } from "components";
import { useThemeX } from "hooks";
import * as React from "react"
import { ColorValue, View } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"
import useAppStore from "store";

interface P extends SvgProps {
    color?: ColorValue;
    color2?: ColorValue;
    isFocused?: boolean;
}

function MessageTabSvg({ color, color2, isFocused, ...props }: P) {

    const { cpSty } = useThemeX();
    const { unReadMessageCount } = useAppStore();

    return (

        <Svg
            width={22}
            height={20}
            viewBox="0 0 22 20"
            fill="none"
            {...props} >
            <Path
                fill={color ?? "#F7F7F7"}
                d="M11.267 0c5.804 0 10.526 4.25 10.526 9.474 0 1.826-.578 3.594-1.673 5.124.207 2.294.763 3.996 1.57 4.803a.35.35 0 01-.297.596c-.142-.02-3.443-.496-5.83-1.874-1.356.547-2.8.824-4.296.824C5.462 18.947.74 14.697.74 9.474.74 4.25 5.462 0 11.267 0zm4.912 10.877c.774 0 1.403-.63 1.403-1.403 0-.774-.63-1.404-1.403-1.404a1.405 1.405 0 000 2.807zm-4.912 0c.774 0 1.403-.63 1.403-1.403 0-.774-.63-1.404-1.403-1.404a1.405 1.405 0 000 2.807zm-4.913 0c.774 0 1.404-.63 1.404-1.403a1.405 1.405 0 00-2.807 0c0 .774.63 1.403 1.403 1.403z"
            />
            {(unReadMessageCount !== null && unReadMessageCount > 0) && <View style={[cpSty.messageBadgesCount, { backgroundColor: color2 }]} >
                <TextX text={unReadMessageCount || 0} lines={1} tSty={cpSty.messageBadgesCount_tSty} />
            </View>}
        </Svg>
    )
}

export default MessageTabSvg
