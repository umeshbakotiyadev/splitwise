import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function DustbinSvg({ color, ...props }: P) {
    return (
        <Svg
            width={16}
            height={18}
            viewBox="0 0 16 18"
            fill="none"
            {...props}>
            <Path
                d="M14.24 2.545h-2.973l-.325-.974A1.498 1.498 0 009.52.545H6.96a1.5 1.5 0 00-1.422 1.026l-.325.974H2.24c-.827 0-1.5.673-1.5 1.5v1c0 .557.502.5 1.04.5h13.46a.5.5 0 00.5-.5v-1c0-.827-.673-1.5-1.5-1.5zm-7.973 0l.22-.658a.5.5 0 01.474-.342H9.52c.215 0 .406.138.474.342l.219.658H6.267zM1.862 6.612l.798 9.636c.07.778.712 1.364 1.493 1.364h8.174c.78 0 1.423-.586 1.494-1.368l.797-9.632H1.862zm3.878 8.5c0 .66-1 .662-1 0v-7c0-.659 1-.662 1 0v7zm3 0c0 .66-1 .662-1 0v-7c0-.659 1-.662 1 0v7zm3 0c0 .66-1 .662-1 0v-7a.5.5 0 111 0v7z"
                fill={color ?? "#EE404C"}
            />
        </Svg>
    )
}

export default DustbinSvg
