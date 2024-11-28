import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function BlockSvg({ color, ...props }: P) {
    return (
        <Svg
            width={18}
            height={17}
            viewBox="0 0 18 17"
            fill="none"
            {...props}
        >
            <Path
                d="M15.251 2.49a8.5 8.5 0 10-12.02 12.02A8.5 8.5 0 0015.25 2.49zM5.577 4.833a5.187 5.187 0 015.798-1.062L4.51 10.63a5.19 5.19 0 011.063-5.798h.003zm7.33 7.334a5.187 5.187 0 01-5.797 1.062l6.86-6.86a5.19 5.19 0 01-1.063 5.798z"
                fill={color ?? "#747474"}
            />
        </Svg>
    )
}

export default BlockSvg
