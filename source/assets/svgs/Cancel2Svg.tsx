import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function Cancel2Svg({ color, ...props }: P) {
    return (
        <Svg
            width={11}
            height={12}
            viewBox="0 0 11 12"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.293 1.208a1 1 0 000 1.415l3.535 3.535L.293 9.694a1 1 0 101.414 1.414l3.536-3.536 3.535 3.536a1 1 0 001.414-1.414L6.657 6.158l3.535-3.535a1 1 0 00-1.414-1.415L5.243 4.744 1.707 1.208a1 1 0 00-1.414 0z"
                fill={color ?? "#fff"}
            />
        </Svg>
    )
}

export default Cancel2Svg
