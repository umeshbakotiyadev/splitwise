import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { G, Mask, Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function RightArrowSvg({ color, ...props }: P) {
    return (
        <Svg
            width={6}
            height={11}
            viewBox="0 0 6 11"
            fill="none"
            {...props}
        >
            <Path
                d="M.813 10.655a.467.467 0 01-.332-.8l4.357-4.357L.481 1.14a.469.469 0 11.663-.663l4.688 4.688a.469.469 0 010 .663l-4.688 4.689a.467.467 0 01-.331.137z"
                fill={color ?? "#747474"}
            />
        </Svg>
    )
}

export default RightArrowSvg
