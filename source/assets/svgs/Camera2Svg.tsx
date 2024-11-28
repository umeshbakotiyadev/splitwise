import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function Camera2Svg({ color, ...props }: P) {
    return (
        <Svg
            width={15}
            height={15}
            viewBox="0 0 15 15"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_2557_1849)" fill={color ?? "#2B4C5A"}>
                <Path d="M12.635 3.776h-1.41l-.778-1.175a1.617 1.617 0 00-1.337-.705H5.88c-.529 0-1.043.265-1.336.705l-.779 1.175h-1.41A1.61 1.61 0 00.74 5.391v5.698c0 .896.72 1.615 1.616 1.615h10.279a1.61 1.61 0 001.615-1.615V5.391a1.61 1.61 0 00-1.615-1.615zm-5.14 7.607A3.641 3.641 0 013.853 7.74a3.629 3.629 0 013.642-3.627 3.641 3.641 0 013.642 3.642 3.638 3.638 0 01-3.642 3.627zm4.934-5.33H11.783a.477.477 0 010-.955h.587a.477.477 0 01.5.455.465.465 0 01-.44.5z" />
                <Path d="M7.495 5.729A2.03 2.03 0 005.47 7.755c0 1.116.91 2.012 2.026 2.012a2.03 2.03 0 002.027-2.026c0-1.116-.91-2.012-2.027-2.012z" />
            </G>
            <Defs>
                <ClipPath id="clip0_2557_1849">
                    <Path
                        fill="#fff"
                        transform="translate(.74 .545)"
                        d="M0 0H13.5098V13.5098H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default Camera2Svg
