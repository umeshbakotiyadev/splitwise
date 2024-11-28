import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function LeaveGroupSvg({ color, ...props }: P) {
    return (
        <Svg
            width={18}
            height={17}
            viewBox="0 0 18 17"
            fill="none"
            {...props}
        >
            <Path
                d="M7.115 9.208c.392 0 .709.318.709.709v2.833c0 .39.317.708.708.708h2.125V2.833c0-.605.385-1.145.965-1.346l.21-.07h-3.3a.71.71 0 00-.708.708V4.25a.708.708 0 11-1.417 0V2.125C6.407.953 7.36 0 8.532 0h7.614c.027 0 .05.012.076.016.034-.003.067-.016.101-.016.782 0 1.417.635 1.417 1.417v12.75c0 .604-.385 1.145-.964 1.346l-4.263 1.421a1.467 1.467 0 01-.44.066 1.418 1.418 0 01-1.416-1.417v-.708H8.532a2.128 2.128 0 01-2.125-2.125V9.917c0-.391.317-.709.708-.709z"
                fill={color ?? "#747474"}
            />
            <Path
                d="M.948 6.583L3.78 3.75a.708.708 0 011.21.5v2.125h2.832a.709.709 0 010 1.417H4.99v2.125a.71.71 0 01-1.209.501L.948 7.585a.708.708 0 010-1.002z"
                fill={color ?? "#747474"}
            />
        </Svg>
    )
}

export default LeaveGroupSvg
