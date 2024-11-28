import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function DocumentPickerSvg({ color, ...props }: P) {
    return (
        <Svg
            width={34}
            height={31}
            viewBox="0 0 34 31"
            fill="none"
            {...props}
        >
            <Path
                d="M22.354 11.98l-9.424 9.426a6.038 6.038 0 01-8.528 0 6.038 6.038 0 010-8.528l9.895-9.896a3.708 3.708 0 015.238 0 3.708 3.708 0 010 5.238l-9.425 9.425a1.38 1.38 0 01-1.948 0 1.38 1.38 0 010-1.947l8.015-8.015-1.344-1.343-8.015 8.015a3.282 3.282 0 000 4.633 3.282 3.282 0 004.634 0l9.426-9.425a5.61 5.61 0 000-7.924 5.61 5.61 0 00-7.925 0L3.06 11.535c-3.092 3.09-3.092 8.122 0 11.215a7.903 7.903 0 005.606 2.318 7.91 7.91 0 005.609-2.318l9.424-9.426-1.344-1.343zM26.353 17.186a6.818 6.818 0 00-6.81 6.81 6.818 6.818 0 006.81 6.81 6.818 6.818 0 006.81-6.81 6.818 6.818 0 00-6.81-6.81zm3.385 7.76h-2.435v2.435h-1.9v-2.435h-2.435v-1.9h2.435v-2.435h1.9v2.436h2.435v1.9z"
                fill={color ?? "#fff"}
            />
        </Svg>
    )
}

export default DocumentPickerSvg
