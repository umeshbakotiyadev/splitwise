import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function BackArrow2Svg({ color, ...props }: P) {
    return (
        <Svg
            width={8}
            height={13}
            viewBox="0 0 8 13"
            fill="none"
            {...props}>
            <Path
                d="M6.709 12.9a.583.583 0 00.413-.996L1.696 6.478l5.424-5.424A.583.583 0 106.296.23L.46 6.067a.583.583 0 000 .825l5.836 5.837a.582.582 0 00.413.17z"
                fill={color ?? "#2B4C5A"}
            />
        </Svg>
    )
}

export default BackArrow2Svg
