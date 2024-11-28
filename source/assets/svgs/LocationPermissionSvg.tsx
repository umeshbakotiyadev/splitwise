import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function LocationPermissionSvg({ color, ...props }: P) {
    return (
        <Svg
            width={22}
            height={21}
            viewBox="0 0 22 21"
            fill="none"
            {...props}
        >
            <Path
                d="M21.565.175c-.26-.26-.63-.183-.946-.074L1.527 6.793A1.112 1.112 0 00.74 7.852c0 .51.44.806.815 1.063l9.166 2.106 2.105 9.166c.258.372.552.813 1.065.813a1.116 1.116 0 001.06-.788l6.689-19.09c.107-.314.185-.687-.075-.947z"
                fill={color ?? "#2B4C5A"}
            />
        </Svg>
    )
}

export default LocationPermissionSvg
