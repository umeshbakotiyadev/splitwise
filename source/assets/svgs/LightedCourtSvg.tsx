import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function LightedCourtSvg({ color, ...props }: P) {
    return (
        <Svg
            width={12}
            height={13}
            viewBox="0 0 12 13"
            fill="none"
            {...props}
        >
            <Path
                d="M3.148 6.582A2.526 2.526 0 005.667 9.1a2.526 2.526 0 002.518-2.518 2.526 2.526 0 00-2.518-2.518 2.526 2.526 0 00-2.519 2.518zm3.778 0c0 .693-.567 1.26-1.26 1.26v-2.52c.693 0 1.26.567 1.26 1.26zM5.037.916h1.26v2.518h-1.26V.916zM5.037 9.73h1.26v2.518h-1.26V9.73zM7.448 3.92l1.78-1.78.89.89-1.78 1.78-.89-.89zM2.096 11.034l-.89-.89 1.78-1.781.891.89-1.78 1.781zM8.815 5.952h2.518v1.26H8.815v-1.26zM0 5.952h2.518v1.26H0v-1.26zM10.127 10.144l-.89.89-1.78-1.781.89-.89 1.78 1.78zM2.995 4.793l-1.78-1.781.89-.89 1.78 1.78-.89.89z"
                fill={color ?? "#B3DAFE"}
            />
        </Svg>
    )
}

export default LightedCourtSvg
