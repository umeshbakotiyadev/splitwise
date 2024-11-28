import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Circle, G, Mask, Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function RightSignSvg({ color, ...props }: P) {
    return (
        <Svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            fill="none"
            {...props}
        >
            <Circle cx={5.69888} cy={5.69888} r={5.69888} fill={color ?? "#A6CE39"} />
            <Path d="M3.109 5.7L5.18 7.772l3.627-3.626" stroke="#fff" />
        </Svg>
    )
}

export default RightSignSvg
