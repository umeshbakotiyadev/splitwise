import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function ImageTabSvg({ color, ...props }: P) {
    return (

        <Svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            {...props}
        >
            <Path
                d="M13.961 0h-10A3.958 3.958 0 00.003 3.958v10a.075.075 0 000 .042 3.958 3.958 0 003.958 3.917h10a3.959 3.959 0 003.95-3.9V3.958A3.958 3.958 0 0013.961 0zm2.709 12.292l-3.484-3.984a2.367 2.367 0 00-3.45 0l-2.391 2.734-.784-.95a2.3 2.3 0 00-3.533 0l-1.775 2.141V3.958A2.717 2.717 0 013.961 1.25h10a2.717 2.717 0 012.709 2.708v8.334z"
                fill={color ?? "#FAFAFA"}
            />
            <Path
                d="M4.795 6.458a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333z"
                fill={color ?? "#FAFAFA"}
            />
        </Svg>
    )
}

export default ImageTabSvg
