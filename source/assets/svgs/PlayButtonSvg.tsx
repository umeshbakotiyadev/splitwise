import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function PlayButtonSvg({ color, ...props }: P) {
    return (
        <Svg
            width={59}
            height={60}
            viewBox="0 0 59 60"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_792_4686)">
                <Path
                    opacity={0.2}
                    d="M58.674 29.874c0 16.108-13.057 29.165-29.165 29.165C13.4 59.04.344 45.982.344 29.874.344 13.767 13.4.71 29.509.71c16.108 0 29.165 13.058 29.165 29.165z"
                    fill="#2B4C5A"
                />
            </G>
            <G clipPath="url(#clip1_792_4686)">
                <Path
                    d="M40.457 28.358L24.05 17.421a1.824 1.824 0 00-2.833 1.517v21.874a1.823 1.823 0 002.833 1.516l16.406-10.937a1.823 1.823 0 000-3.033z"
                    fill="#fff"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_792_4686">
                    <Path fill="#fff" d="M0 0H59V60H0z" />
                </ClipPath>
                <ClipPath id="clip1_792_4686">
                    <Path fill="#fff" transform="translate(21 17)" d="M0 0H21V26H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default PlayButtonSvg
