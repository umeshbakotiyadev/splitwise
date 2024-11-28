import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function ShoppingCartSvg({ color, ...props }: P) {
    return (
        <Svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            {...props}>
            <Path
                d="M.583.583a.583.583 0 100 1.167h1.038a.405.405 0 01.384.276l1.923 5.771c.086.256.097.532.031.794l-.158.635c-.233.93.49 1.857 1.449 1.857h7a.583.583 0 100-1.167h-7a.315.315 0 01-.318-.406l.12-.477a.374.374 0 01.362-.283h6.253c.25 0 .474-.16.553-.4l1.556-4.666a.583.583 0 00-.554-.768H3.824a.405.405 0 01-.384-.276L2.887.982a.583.583 0 00-.554-.399H.583zm4.084 11.083a1.167 1.167 0 100 2.334 1.167 1.167 0 000-2.334zm7 0a1.167 1.167 0 100 2.334 1.167 1.167 0 000-2.334z"
                fill={color ?? "#fff"}
            />
        </Svg>
    )
}

export default ShoppingCartSvg
