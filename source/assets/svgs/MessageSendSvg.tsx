import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function MessageSendSvg({ color, ...props }: P) {
    return (
        <Svg
            width={22}
            height={18}
            viewBox="0 0 22 18"
            fill="none"
            {...props}
        >
            <Path
                d="M20.234 7.094L3.51.154A1.99 1.99 0 001.433.49a1.99 1.99 0 00-.63 2.008l1.489 5.837H9.58a.607.607 0 010 1.215H2.292L.803 15.388a1.99 1.99 0 00.63 2.008 1.99 1.99 0 002.077.335l16.724-6.94a1.97 1.97 0 001.235-1.848 1.97 1.97 0 00-1.235-1.849z"
                fill={color ?? "#F2F2F7"}
            />
        </Svg>
    )
}

export default MessageSendSvg
