import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function LocationSvg({ color, ...props }: P) {
    return (
        <Svg
            width={15}
            height={19}
            viewBox="0 0 15 19"
            fill="none"
            {...props}
        >
            <Path
                d="M7.287 18.037c-.142 0-.285-.072-.427-.143-.213-.142-6.687-4.553-6.687-9.817C.173 4.164 3.374.963 7.287.963S14.4 4.164 14.4 8.077c0 5.264-6.474 9.675-6.687 9.817-.143.072-.285.143-.427.143zm0-15.651c-3.13 0-5.691 2.56-5.691 5.691 0 3.842 4.34 7.399 5.69 8.395 1.353-.996 5.692-4.553 5.692-8.395 0-3.13-2.56-5.691-5.691-5.691z"
                fill={color ?? "#A6CE39"}
            />
            <Path
                d="M7.287 10.923a2.854 2.854 0 01-2.846-2.846 2.854 2.854 0 012.846-2.846 2.854 2.854 0 012.846 2.846 2.854 2.854 0 01-2.846 2.846zm0-4.269c-.783 0-1.423.64-1.423 1.423S6.504 9.5 7.287 9.5 8.71 8.86 8.71 8.077c0-.782-.64-1.423-1.423-1.423z"
                fill={color ?? "#A6CE39"}
            />
        </Svg>
    )
}

export default LocationSvg
