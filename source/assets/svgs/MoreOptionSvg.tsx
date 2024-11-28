import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Circle, Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function MoreOptionSvg({ color, ...props }: P) {
    return (
        <Svg
            width={18}
            height={5}
            viewBox="0 0 18 5"
            fill="none"
            {...props}
        >
            <Circle cx={2} cy={2.91553} r={2} fill={color ?? "#747474"} />
            <Circle cx={9} cy={2.91553} r={2} fill={color ?? "#747474"} />
            <Circle cx={16} cy={2.91553} r={2} fill={color ?? "#747474"} />
        </Svg>
    )
}

export default MoreOptionSvg
