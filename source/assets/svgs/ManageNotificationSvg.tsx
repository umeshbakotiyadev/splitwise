import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { G, Mask, Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function ManageNotificationSvg({ color, ...props }: P) {
    return (
        <Svg
            width={17}
            height={16}
            viewBox="0 0 17 16"
            fill="none"
            {...props}
        >
            <Path
                d="M8.668 8.53l3 2.25a.5.5 0 10.6-.8L9.49 7.876v-4.25a.5.5 0 10-1 0v4.5c0 .166.07.315.178.402z"
                fill={color ?? "#A6CE39"}
            />
            <Path
                d="M9.24.376a7.5 7.5 0 00-7.394 6.25l-.19-.282a.5.5 0 10-.83.56l1 1.5a.5.5 0 00.365.222h.05c.132 0 .26-.053.352-.147l1.25-1.25a.5.5 0 00-.707-.708l-.31.313a6.5 6.5 0 116.415 7.542 6.152 6.152 0 01-5.093-2.54.5.5 0 00-.815.58 7.142 7.142 0 005.908 2.96 7.5 7.5 0 100-15z"
                fill={color ?? "#A6CE39"}
            />
        </Svg>
    )
}

export default ManageNotificationSvg
