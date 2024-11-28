import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function UpArrowSvg({ color, ...props }: P) {
    return (
        <Svg
            width={12}
            height={18}
            viewBox="0 0 12 18"
            fill="none"
            {...props}>
            <Path
                d="M0 6.417c0 .149.053.298.16.412a.52.52 0 00.771 0L6 1.409l5.069 5.42a.52.52 0 00.771 0 .612.612 0 000-.825L6.386.171a.52.52 0 00-.772 0L.16 6.004a.603.603 0 00-.16.413z"
                fill={color ?? "#000"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.044 1c.278 0 .503.224.503.5v16c0 .276-.225.5-.503.5a.502.502 0 01-.504-.5v-16c0-.276.226-.5.504-.5z"
                fill={color ?? "#000"}
            />
        </Svg>
    )
}

export default UpArrowSvg
