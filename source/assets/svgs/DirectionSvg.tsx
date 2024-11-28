import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function DirectionSvg({ color, ...props }: P) {
    return (
        <Svg
            width={10}
            height={11}
            viewBox="0 0 10 11"
            fill="none"
            {...props}
        >
            <Path
                d="M9.85 5.566l-4.5-4.5c-.2-.2-.5-.2-.7 0l-4.5 4.5c-.2.2-.2.5 0 .7l4.5 4.5c.2.2.5.2.7 0l4.5-4.5c.2-.2.2-.5 0-.7zM6 7.166v-1.25H4v1.5H3v-2c0-.3.2-.5.5-.5H6v-1.25l1.75 1.75L6 7.166z"
                fill={color ?? "#fff"}
            />
        </Svg>
    )
}

export default DirectionSvg
