import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function MessageSendRightSignSvg({ color, ...props }: P) {
    return (
        <Svg
            width={15}
            height={8}
            viewBox="0 0 15 8"
            fill="none"
            {...props}
        >
            <Path d="M5.74 4l2.5 2.5 5.5-5.5" stroke={color ?? "#3598FF"} />
            <Path d="M.74 4l2.5 2.5L8.74 1" stroke={color ?? "#3598FF"} />
        </Svg>
    )
}

export default MessageSendRightSignSvg
