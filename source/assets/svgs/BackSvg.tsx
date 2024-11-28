import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function BackSvg({ color, ...props }: P) {
    return (
        <Svg
            width={11}
            height={21}
            viewBox="0 0 11 21"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.434 11.758l8.648 8.953c1.396.071 2.009-.602 1.907-1.982l-7.593-7.892 7.593-7.892c.102-1.38-.51-2.052-1.907-1.982L.434 9.95c-.579.637-.579 1.132 0 1.805v.002z"
                fill={color ?? "#fff"}
            />
        </Svg>
    )
}

export default BackSvg
