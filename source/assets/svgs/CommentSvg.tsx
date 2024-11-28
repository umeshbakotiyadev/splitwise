import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function CommentSvg({ color, ...props }: P) {
    return (
        <Svg
            width={22}
            height={21}
            viewBox="0 0 22 21"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.035 18.413l2.857 2.301a.763.763 0 001.243-.594v-3.823a8.981 8.981 0 003.337-6.893C21.472 4.238 16.815 0 11.03 0 5.244 0 .588 4.238.588 9.404c0 5.166 4.656 9.406 10.442 9.406a11.432 11.432 0 003.005-.397zm.65-1.439a.764.764 0 00-.707-.133 9.935 9.935 0 01-2.948.441c-4.896 0-8.914-3.504-8.914-7.878 0-4.372 4.018-7.876 8.914-7.876s8.914 3.504 8.914 7.876a7.512 7.512 0 01-3.042 5.924.761.761 0 00-.295.602v2.594l-1.923-1.55z"
                fill={color ?? "#2B4C5A"}
            />
        </Svg>
    )
}

export default CommentSvg
