import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function PhoneSvg({ color, ...props }: P) {
    return (
        <Svg
            width={8}
            height={9}
            viewBox="0 0 8 9"
            fill="none"
            {...props}
        >
            <Path
                d="M7.774 6.787L6.658 5.67c-.4-.398-1.077-.239-1.237.28-.12.358-.518.558-.877.478-.797-.2-1.874-1.236-2.073-2.073-.12-.36.12-.758.478-.878.519-.16.678-.837.28-1.236L2.111 1.125c-.319-.28-.797-.28-1.077 0l-.757.757c-.758.798.08 2.911 1.954 4.785 1.874 1.874 3.987 2.751 4.784 1.954l.758-.758c.28-.319.28-.797 0-1.076z"
                fill={color ?? "#B3DAFE"}
            />
        </Svg>
    )
}

export default PhoneSvg
