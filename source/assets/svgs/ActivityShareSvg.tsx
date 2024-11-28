import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function ActivityShareSvg({ color, ...props }: P) {
    return (
        <Svg
            width={20}
            height={19}
            viewBox="0 0 20 19"
            fill="none"
            {...props}
        >
            <Path
                d="M18.986.35a.542.542 0 00-.54-.136L1.865 5.19a1.704 1.704 0 00.008 3.272l7.002 2 2.001 7.003a1.704 1.704 0 003.272.007L19.122.89a.542.542 0 00-.136-.539zM1.726 6.831c0-.28.181-.523.45-.604L16.699 1.87 9.155 9.414 2.17 7.418a.613.613 0 01-.442-.587zm11.383 10.33a.626.626 0 01-.604.448.613.613 0 01-.587-.443l-1.996-6.985 7.543-7.544-4.357 14.523z"
                fill={color ?? "#2B4C5A"}
            />
        </Svg>
    )
}

export default ActivityShareSvg
