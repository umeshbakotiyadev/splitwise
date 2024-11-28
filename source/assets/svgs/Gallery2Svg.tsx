import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function Gallery2Svg({ color, ...props }: P) {
    return (
        <Svg
            width={15}
            height={15}
            viewBox="0 0 15 15"
            fill="none"
            {...props}
        >
            <Path
                d="M11.584.545H3.817A3.074 3.074 0 00.743 3.62v7.766a3.074 3.074 0 003.074 3.074h7.767a3.074 3.074 0 003.068-3.028V3.62A3.075 3.075 0 0011.584.545zm2.103 9.547l-2.705-3.094a1.838 1.838 0 00-2.68 0L6.445 9.121l-.609-.738a1.786 1.786 0 00-2.744 0l-1.379 1.664V3.62a2.11 2.11 0 012.104-2.104h7.767a2.11 2.11 0 012.103 2.104v6.472z"
                fill={color ?? "#2B4C5A"}
            />
            <Path
                d="M4.464 5.561a1.294 1.294 0 100-2.589 1.294 1.294 0 000 2.59z"
                fill={color ?? "#2B4C5A"}
            />
        </Svg>
    )
}

export default Gallery2Svg
