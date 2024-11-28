import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function DrawerMenuSvg({ color, ...props }: P) {
    return (
        <Svg
            width={30}
            height={21}
            viewBox="0 0 30 21"
            fill="none"
            {...props}
        >
            <Path
                d="M27.992 11.685H1.462a1.206 1.206 0 010-2.412h26.53a1.206 1.206 0 010 2.412zM27.992 2.44H1.462a1.206 1.206 0 010-2.412h26.53a1.206 1.206 0 010 2.412zM27.992 20.93H1.462a1.206 1.206 0 010-2.412h26.53a1.206 1.206 0 010 2.412z"
                fill={color ?? "#fff"}
            />
        </Svg>
    )
}

export default DrawerMenuSvg
