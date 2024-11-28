import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function DawnArrowSvg({ color, ...props }: P) {
    return (
        <Svg
            width={15}
            height={9}
            viewBox="0 0 15 9"
            fill="none"
            {...props}
        >
            <Path
                d="M1.526 1.088L7.168 6.73l5.641-5.642a.897.897 0 011.268 1.268L7.802 8.631a.896.896 0 01-1.268 0L.259 2.356a.896.896 0 011.267-1.268z"
                fill={color ?? "#2B4C5A"}
            />
        </Svg>
    )
}

export default DawnArrowSvg
