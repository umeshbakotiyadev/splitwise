import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function DownArrowSvg({ color, ...props }: P) {
    return (
        <Svg
            width={12}
            height={18}
            viewBox="0 0 12 18"
            fill="none"
            {...props}>
            <Path
                d="M12 11.583a.603.603 0 00-.16-.412.52.52 0 00-.771 0L6 16.591l-5.069-5.42a.52.52 0 00-.771 0 .612.612 0 000 .825l5.454 5.833a.52.52 0 00.772 0l5.454-5.833a.603.603 0 00.16-.413z"
                fill={color ?? "#000"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.956 17a.502.502 0 01-.503-.5V.5c0-.276.225-.5.503-.5s.504.224.504.5v16c0 .276-.226.5-.504.5z"
                fill={color ?? "#000"}
            />
        </Svg>
    )
}

export default DownArrowSvg
