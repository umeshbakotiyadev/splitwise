import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function FilterSvg({ color, ...props }: P) {
    return (
        <Svg
            width={24}
            height={14}
            viewBox="0 0 24 14"
            fill="none"
            {...props}
        >
            <Path
                d="M2.177 2.47h19.764a1.236 1.236 0 000-2.47H2.177a1.236 1.236 0 100 2.47zM19.06 7c0-.683-.554-1.235-1.236-1.235H6.294a1.235 1.235 0 000 2.47h11.53c.682 0 1.235-.553 1.235-1.235zM11.236 14h1.647a1.235 1.235 0 000-2.47h-1.647a1.235 1.235 0 000 2.47z"
                fill={color ?? "#fff"}
            />
        </Svg>
    )
}

export default FilterSvg
