import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function WarningSvg({ color, ...props }: P) {
    return (
        <Svg
            width={20}
            height={18}
            viewBox="0 0 20 18"
            fill="none"
            {...props}
        >
            <Path
                d="M8.479.849L.228 15.139a1.698 1.698 0 001.47 2.547h16.5a1.697 1.697 0 001.471-2.547L11.419.85a1.697 1.697 0 00-2.94 0z"
                fill={color ?? "#EE404C"}
            />
            <Path
                d="M10.056 5.256h-.215a.96.96 0 00-.96.96v4.586c0 .53.43.96.96.96h.215c.53 0 .96-.43.96-.96V6.216a.96.96 0 00-.96-.96zM9.949 15.399a1.067 1.067 0 100-2.134 1.067 1.067 0 000 2.134z"
                fill="#FFF7ED"
            />
        </Svg>
    )
}

export default WarningSvg
