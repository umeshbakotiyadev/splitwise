import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, Rect, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function FeeSvg({ color, ...props }: P) {
    return (
        <Svg
            width={16}
            height={9}
            viewBox="0 0 16 9"
            fill="none"
            {...props}
        >
            <Rect y={0.915527} width={16} height={8} rx={2.2069} fill={color ?? "#B3DAFE"} />
            <Path
                d="M3.78 6.81V3.159c0-.055.043-.104.104-.104H6.13c.06 0 .104.05.104.104v.453a.105.105 0 01-.104.105H4.497v1.037h1.362c.055 0 .105.05.105.105v.452c0 .055-.05.105-.105.105H4.497V6.81c0 .055-.05.105-.105.105h-.508a.105.105 0 01-.105-.105zm3.07 0V3.159c0-.055.045-.104.105-.104h2.246c.06 0 .105.05.105.104v.453a.105.105 0 01-.105.105H7.568v.904H8.93c.056 0 .105.05.105.105v.458c0 .06-.05.105-.105.105H7.568v.966H9.2c.06 0 .105.05.105.104v.453a.105.105 0 01-.105.105H6.955a.105.105 0 01-.105-.105zm3.18 0V3.159c0-.055.043-.104.104-.104h2.246c.06 0 .104.05.104.104v.453a.105.105 0 01-.104.105h-1.634v.904h1.363c.055 0 .105.05.105.105v.458c0 .06-.05.105-.105.105h-1.363v.966h1.634c.06 0 .104.05.104.104v.453a.105.105 0 01-.104.105h-2.246a.105.105 0 01-.105-.105z"
                fill="#fff"
            />
        </Svg>
    )
}

export default FeeSvg
