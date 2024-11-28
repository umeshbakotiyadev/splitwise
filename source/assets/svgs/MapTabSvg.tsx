import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { ClipPath, Defs, G, Mask, Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function MapTabSvg({ color, ...props }: P) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_2716_1124)">
                <Path
                    d="M22.69 8H1.078c-.32 0-.58.26-.58.579v15.436c0 .32.26.579.58.579h21.61c.32 0 .58-.26.58-.58V8.58c0-.32-.26-.579-.58-.579z"
                    fill={color ?? "#F2F2F2"}
                />
                <Path
                    d="M23.268 11.693v-1.158H12.463V8h-1.158v2.535H.5v1.158h5.622v9.208H.5v1.157h10.805v2.536h1.158v-2.536h10.805v-1.157h-5.623v-9.208h5.623zm-11.963 9.208H7.28v-4.014h4.025v4.014zm0-5.175H7.28v-4.033h4.025v4.033zm5.183 5.175h-4.025v-4.017h4.025V20.9zm0-5.183h-4.025v-4.025h4.025v4.025z"
                    fill="#2B4C5A"
                />
                <Path
                    d="M6.18 6.41C6.18 3.11 8.782.5 11.93.5c3.185 0 5.75 2.665 5.75 5.91a6 6 0 01-1.047 3.4l-3.876 6.227s0 0 0 0h0l-.425-.263a.47.47 0 01-.804 0L6.18 6.41zm0 0c0 1.258.369 2.38 1.062 3.419M6.18 6.409l1.062 3.42m0 0l3.862 6.208s0 0 0 0L7.242 9.83zm4.688-1.46c-1.025 0-1.886-.865-1.886-1.96 0-1.093.86-1.958 1.886-1.958 1.026 0 1.886.865 1.886 1.959s-.86 1.959-1.886 1.959z"
                    fill={color ?? "#F2F2F2"}
                    stroke="#2B4C5A"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_2716_1124">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default MapTabSvg
