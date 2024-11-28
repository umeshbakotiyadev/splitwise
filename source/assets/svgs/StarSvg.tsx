import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function StarSvg({ color, ...props }: P) {
    return (
        <Svg
            width={17}
            height={16}
            viewBox="0 0 17 16"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.25.478l2.001 4.31a.283.283 0 00.234.168l4.782.542a.82.82 0 01.693.555c.1.302.01.635-.229.85l-3.545 3.205a.274.274 0 00-.09.272l.954 4.646a.802.802 0 01-.321.82.831.831 0 01-.892.047l-4.191-2.33a.294.294 0 00-.291 0l-4.193 2.33a.832.832 0 01-.89-.048.804.804 0 01-.322-.82l.954-4.645a.275.275 0 00-.09-.272L.27 6.902a.802.802 0 01-.23-.85.82.82 0 01.693-.555l4.783-.542a.283.283 0 00.234-.167l2-4.31A.822.822 0 018.5 0c.324 0 .617.186.75.478z"
                fill={color ?? "#A0A0A0"}
            />
        </Svg>
    )
}

export default StarSvg
