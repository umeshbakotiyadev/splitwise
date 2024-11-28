import { TextX, ViewX } from "components";
import TextXCompo from "components/XCompos/TextXCompo";
import { Size } from "functions";
import { useThemeX } from "hooks";
import * as React from "react"
import { ColorValue, View } from "react-native"
import Svg, { Circle, Path, SvgProps } from "react-native-svg"
import useAppStore from "store";

interface P extends SvgProps {
    color?: ColorValue;
    color2?: ColorValue;
}

function MessageSvg({ color2, color, ...props }: P) {

    const { font, col, cpSty } = useThemeX();
    const { unReadMessageCount } = useAppStore();

    return (
        <Svg
            width={31}
            height={27}
            viewBox="0 0 31 27"
            fill="none"
            {...props}
        >
            <Path
                d="M11.9 3.42c6.56 0 11.899 4.803 11.899 10.709 0 2.064-.653 4.063-1.892 5.792.235 2.593.863 4.518 1.775 5.43a.397.397 0 01-.335.673c-.16-.023-3.892-.56-6.592-2.118a12.91 12.91 0 01-4.856.932C5.338 24.838 0 20.034 0 14.128 0 8.224 5.338 3.42 11.9 3.42zm5.552 12.295c.875 0 1.587-.711 1.587-1.586 0-.875-.712-1.587-1.587-1.587s-1.586.712-1.586 1.587.711 1.586 1.586 1.586zm-5.553 0c.875 0 1.587-.711 1.587-1.586 0-.875-.712-1.587-1.587-1.587s-1.586.712-1.586 1.587.711 1.586 1.586 1.586zm-5.553 0c.875 0 1.587-.711 1.587-1.586 0-.875-.712-1.587-1.587-1.587s-1.586.712-1.586 1.587.711 1.586 1.586 1.586z"
                fill={color2 ?? "#F7F7F7"}
            />
            {(unReadMessageCount !== null && unReadMessageCount > 0) && <View
                style={cpSty.messageBadgesCount} >
                <TextX text={unReadMessageCount} tSty={cpSty.messageBadgesCount_tSty} />
            </View>}
        </Svg>
    )
}

export default MessageSvg
