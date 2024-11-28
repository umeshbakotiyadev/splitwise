import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function MessageSend2Svg({ color, ...props }: P) {
    return (
        <Svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            {...props}
        >
            <Path
                d="M15.732 8.083a.449.449 0 00-.237-.395L2.872.89A1.41 1.41 0 00.96 2.81l2.93 5.273-2.93 5.272a1.41 1.41 0 001.912 1.92l12.623-6.797a.449.449 0 00.237-.395zM1.83 1.77a.519.519 0 01.616-.09l11.056 5.953H4.667l-2.922-5.26a.508.508 0 01.085-.603zm.616 12.714a.519.519 0 01-.616-.09.508.508 0 01-.085-.604l2.922-5.26h8.835L2.446 14.486z"
                fill={color ?? "#fff"}
            />
        </Svg>
    )
}

export default MessageSend2Svg
