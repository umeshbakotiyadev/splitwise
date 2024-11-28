import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { G, Mask, Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function Profile2Svg({ color, ...props }: P) {
    return (
        <Svg
            width={18}
            height={21}
            viewBox="0 0 18 21"
            fill="none"
            {...props}
        >
            <Path
                d="M9.225 10.99a5.23 5.23 0 01-5.222-5.222A5.23 5.23 0 019.225.545a5.23 5.23 0 015.223 5.223 5.23 5.23 0 01-5.223 5.223zm0-9.082a3.869 3.869 0 00-3.86 3.86 3.869 3.869 0 003.86 3.86 3.869 3.869 0 003.86-3.86 3.869 3.869 0 00-3.86-3.86zM17.026 20.074a.686.686 0 01-.681-.681c0-3.134-3.197-5.677-7.121-5.677-3.924 0-7.121 2.543-7.121 5.677a.686.686 0 01-.682.68.686.686 0 01-.68-.68c0-3.879 3.805-7.04 8.483-7.04 4.678 0 8.483 3.161 8.483 7.04a.686.686 0 01-.68.68z"
                fill={color ?? "#A6CE39"}
            />
        </Svg>
    )
}

export default Profile2Svg
