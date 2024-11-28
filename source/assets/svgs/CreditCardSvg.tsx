import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function CreditCardSvg({ color, ...props }: P) {
    return (
        <Svg
            width={19}
            height={17}
            viewBox="0 0 19 17"
            fill="none"
            {...props}
        >
            <Path
                d="M16.053.734H5.04a2.12 2.12 0 00-2.118 2.118.706.706 0 101.412 0c0-.39.317-.706.706-.706h11.013c.389 0 .706.317.706.706v7.06c0 .389-.317.705-.706.705h-.706v-3.53a2.12 2.12 0 00-2.118-2.117H2.216A2.12 2.12 0 00.1 7.088v7.059a2.12 2.12 0 002.117 2.118H13.23a2.12 2.12 0 002.118-2.118v-2.118h.706a2.12 2.12 0 002.117-2.118V2.852A2.12 2.12 0 0016.053.734zm-2.118 13.413c0 .39-.317.706-.706.706H2.216a.707.707 0 01-.706-.706v-7.06c0-.389.317-.705.706-.705H13.23c.39 0 .706.316.706.706v.706H3.628a.706.706 0 100 1.412h10.307v4.941z"
                fill={color ?? "#A6CE39"}
            />
            <Path
                d="M11.817 13.44H8.993a.706.706 0 010-1.412h2.824a.706.706 0 010 1.412z"
                fill={color ?? "#A6CE39"}
            />
        </Svg>
    )
}

export default CreditCardSvg
