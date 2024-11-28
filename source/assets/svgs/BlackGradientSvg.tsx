import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { ClipPath, Defs, G, LinearGradient, Path, Stop, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function BlackGradientSvg({ color, ...props }: P) {
    return (
        <Svg
            width={375}
            height={269}
            viewBox="0 0 375 269"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_798_4491)">
                <Path fill="url(#paint0_linear_798_4491)" d="M0 0H375V269H0z" />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_798_4491"
                    x1={187.5}
                    y1={0}
                    x2={187.5}
                    y2={269}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopOpacity={0} />
                    <Stop offset={1} />
                </LinearGradient>
                <ClipPath id="clip0_798_4491">
                    <Path fill="#fff" d="M0 0H375V269H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default BlackGradientSvg
