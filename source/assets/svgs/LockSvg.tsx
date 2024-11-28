import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function LockSvg({ color, ...props }: P) {
    return (
        <Svg
            width={12}
            height={15}
            viewBox="0 0 12 15"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.916 4.999a4.083 4.083 0 10-8.166 0v3.5h1.166v-3.5a2.917 2.917 0 015.834 0v3.5h1.166v-3.5z"
                fill={color ?? "#2B4C5A"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 7.919v5.826c0 .647.524 1.17 1.16 1.17h9.345c.641 0 1.161-.522 1.161-1.17V7.92c0-.646-.524-1.17-1.16-1.17H1.16C.52 6.749 0 7.272 0 7.919z"
                fill={color ?? "#2B4C5A"}
            />
        </Svg>
    )
}

export default LockSvg
