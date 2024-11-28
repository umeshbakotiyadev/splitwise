import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Circle, Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function VerticalMoreSvg({ color, ...props }: P) {
    return (
        <Svg
            width={5}
            height={18}
            viewBox="0 0 5 18"
            fill="none"
            {...props}
        >
            <Circle
                cx={2.37695}
                cy={2}
                r={2}
                transform="rotate(90 2.377 2)"
                fill="#818181"
            />
            <Circle
                cx={2.37695}
                cy={9}
                r={2}
                transform="rotate(90 2.377 9)"
                fill="#818181"
            />
            <Circle
                cx={2.37695}
                cy={16}
                r={2}
                transform="rotate(90 2.377 16)"
                fill="#818181"
            />
        </Svg>
    )
}

export default VerticalMoreSvg
