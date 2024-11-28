import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { ClipPath, Defs, G, Image, Mask, Path, Pattern, SvgProps, Use } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function JumpCourtFinderSvg({ color, ...props }: P) {
    return (
        <Svg
            width={72}
            height={72}
            viewBox="0 0 72 72"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_498_6)">
                <Mask
                    id="a"
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={72}
                    height={72}
                >
                    <Path d="M72 0H0v72h72V0z" fill="#fff" />
                </Mask>
                <G mask="url(#a)">
                    <Path
                        d="M71.996 36c0 19.883-16.117 36-35.996 36C16.12 72 0 55.883 0 36S16.117 0 36 0s35.996 16.117 35.996 36z"
                        fill="#F4F4F4"
                    />
                    <Path fill="url(#pattern0)" fillOpacity={0.8} d="M0 0H72V71H0z" />
                    <Path
                        d="M44.003 25.695h10.411V50.686H17.007v-24.99h10.411"
                        fill="#A6CE39"
                    />
                    <Path
                        d="M44.003 25.695h10.411V50.686H17.007v-24.99h10.411"
                        stroke="#000"
                        strokeWidth={1.37933}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <Path
                        d="M28.804 29.166H17.007v18.05h37.408v-18.05H42.616"
                        fill="#2B4C5A"
                    />
                    <Path
                        d="M28.804 29.166H17.007v18.05h37.408v-18.05H42.616"
                        stroke="#000"
                        strokeWidth={1.37933}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <Path
                        opacity={0.3}
                        d="M54.414 29.162v18.054H17.007v-4.885h32.522V29.162h4.885z"
                        fill="#fff"
                    />
                    <Path
                        d="M28.804 29.166h-3.7v18.05h20.991v-18.05h-3.477"
                        fill="#A6CE39"
                    />
                    <Path
                        d="M28.804 29.166h-3.7v18.05h20.991v-18.05h-3.477"
                        stroke="#000"
                        strokeWidth={1.37933}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <Path
                        opacity={0.1}
                        d="M42.628 29.166V43.75H25.103v3.466H46.096v-18.05h-3.467z"
                        fill="#000"
                    />
                    <Path
                        d="M46.095 38.191H25.1M35.712 50.687V32.79"
                        stroke="#000"
                        strokeWidth={1.37933}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <Path
                        d="M35.713 32.79a8.395 8.395 0 100-16.79 8.395 8.395 0 000 16.79z"
                        fill="#2B4C5A"
                        stroke="#000"
                        strokeWidth={1.37933}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <Path
                        d="M36.958 28.895C36.154 30.12 35.507 31 35.507 31s-4.5-6.095-4.5-8.55c0-2.455 2.017-4.45 4.5-4.45 2.482 0 4.5 1.995 4.5 4.45 0 1.525-1.734 4.45-3.049 6.45"
                        fill="#A6CE39"
                    />
                    <Path
                        d="M36.958 28.895C36.154 30.12 35.507 31 35.507 31s-4.5-6.095-4.5-8.55c0-2.455 2.017-4.45 4.5-4.45 2.482 0 4.5 1.995 4.5 4.45 0 1.525-1.734 4.45-3.049 6.45"
                        stroke="#000"
                        strokeWidth={1.37933}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <Path
                        d="M35.507 24a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM28.804 29.166H17.007v18.05h37.408v-18.05H42.616"
                        stroke="#000"
                        strokeWidth={1.37933}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </G>
            </G>
            <Defs>
                <Pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <Use xlinkHref="#image0_498_6" transform="scale(.00694 .00704)" />
                </Pattern>
                <ClipPath id="clip0_498_6">
                    <Path fill="#fff" d="M0 0H72V72H0z" />
                </ClipPath>
                <Image
                    id="image0_498_6"
                    width={144}
                    height={142}
                    xlinkHref="data:image/png;base64,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"
                />
            </Defs>
        </Svg>
    )
}

export default JumpCourtFinderSvg
