import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function FlagSvg({ color, ...props }: P) {
    return (
        <Svg
            width={10}
            height={13}
            viewBox="0 0 10 13"
            fill="none"
            {...props}
        >
            <Path
                d="M9.72 6.434L8.64 4.277l1.1-2.747a.6.6 0 00-.557-.822H.792a.6.6 0 00-.6.6v10.789a.6.6 0 101.2 0V7.302h7.791a.6.6 0 00.536-.868z"
                fill={color ?? "#fff"}
            />
        </Svg>
    )
}

export default FlagSvg
