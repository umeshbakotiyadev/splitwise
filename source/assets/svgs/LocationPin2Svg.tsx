import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function LocationPin2Svg({ color, ...props }: P) {
    return (
        <Svg
            width={7}
            height={11}
            viewBox="0 0 7 11"
            fill="none"
            {...props}
        >
            <Path
                d="M3.5.916C1.592.916 0 2.5 0 4.522c0 .77.224 1.456.655 2.099l2.577 4.144c.125.201.411.2.536 0l2.588-4.158A3.666 3.666 0 007 4.522C7 2.533 5.43.916 3.5.916zm0 5.246c-.877 0-1.59-.736-1.59-1.64 0-.904.713-1.64 1.59-1.64.877 0 1.59.736 1.59 1.64 0 .904-.713 1.64-1.59 1.64z"
                fill={color ?? "#B3DAFE"}
            />
        </Svg>
    )
}

export default LocationPin2Svg
