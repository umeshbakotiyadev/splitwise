import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function RightArrow2Svg({ color, ...props }: P) {
    return (
        <Svg
            width={22}
            height={16}
            viewBox="0 0 22 16"
            fill="none"
            {...props}
        >
            <Path
                d="M13.222 16a.695.695 0 01-.5-.213.742.742 0 010-1.029L19.293 8l-6.57-6.759a.742.742 0 010-1.028.693.693 0 011 0l7.07 7.273a.742.742 0 010 1.028l-7.07 7.273a.695.695 0 01-.5.213z"
                fill="#fff"
            />
            <Path
                d="M20.394 8H1"
                stroke="#fff"
                strokeWidth={1.28}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default RightArrow2Svg
