import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Circle, Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function PlushSvg({ color, ...props }: P) {
    return (
        <Svg
            width={21}
            height={20}
            viewBox="0 0 21 20"
            fill="none"
            {...props}
        >
            <Circle
                cx={10.7402}
                cy={10}
                r={9}
                fill={color ?? "#A6CE39"}
                stroke="#fff"
                strokeWidth={2}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.08 6H11.4c.193 0 .348.155.348.347v2.635h2.644c.193 0 .347.164.347.357v1.322a.346.346 0 01-.347.348h-2.644v2.644A.346.346 0 0111.4 14H10.08a.354.354 0 01-.357-.347v-2.645H7.088a.346.346 0 01-.348-.347V9.34c0-.193.155-.357.348-.357h2.634V6.347c0-.192.164-.347.357-.347z"
                fill="#fff"
            />
        </Svg>
    )
}

export default PlushSvg
