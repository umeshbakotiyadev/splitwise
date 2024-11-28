import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function HeartSvg({ color, ...props }: P) {
    return (
        <Svg
            width={20}
            height={19}
            viewBox="0 0 20 19"
            fill="none"
            {...props}>
            <Path
                d="M18.393 2.614a5.43 5.43 0 00-7.888 0L10 3.14l-.505-.526a5.428 5.428 0 00-7.888 0c-2.13 2.218-2.144 5.735-.032 8.18 1.926 2.229 7.608 7.044 7.85 7.248.163.139.36.206.555.206H10a.83.83 0 00.575-.206c.241-.204 5.923-5.02 7.85-7.249 2.112-2.444 2.098-5.96-.032-8.179zm-1.28 6.95C15.61 11.3 11.482 14.883 10 16.155 8.517 14.885 4.39 11.3 2.888 9.564 1.414 7.858 1.4 5.43 2.856 3.914a3.725 3.725 0 012.695-1.16c.976 0 1.952.387 2.695 1.16l1.11 1.157c.133.137.3.22.474.248a.862.862 0 00.812-.248l1.111-1.157a3.71 3.71 0 015.391 0c1.455 1.516 1.441 3.944-.031 5.65z"
                fill={color ?? "#000"}
            />
        </Svg>
    )
}

export default HeartSvg
