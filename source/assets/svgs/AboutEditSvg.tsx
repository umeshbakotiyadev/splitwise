import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function AboutEditSvg({ color, ...props }: P) {
    return (
        <Svg
            width={13}
            height={15}
            viewBox="0 0 13 15"
            fill="none"
            {...props}
        >
            <Path
                d="M1.98 12.205c.14 0 .168-.014.294-.042l2.52-.504c.267-.07.533-.196.743-.406l6.107-6.107c.938-.938.938-2.549 0-3.487l-.519-.547c-.938-.938-2.563-.938-3.501 0L1.517 7.233a1.682 1.682 0 00-.406.742l-.532 2.55c-.07.476.07.938.406 1.274.266.266.659.406.995.406zm.476-3.964l6.106-6.12c.407-.406 1.149-.406 1.541 0l.532.532c.476.476.476 1.149 0 1.61l-6.092 6.121-2.591.434.504-2.577zM11.588 13.073H1.25c-.406 0-.672.267-.672.673s.336.672.672.672h10.28c.407 0 .743-.266.743-.672a.693.693 0 00-.686-.673z"
                fill={color ?? "#747474"}
            />
        </Svg>
    )
}

export default AboutEditSvg
