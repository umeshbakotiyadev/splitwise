import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { G, Mask, Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function TransactionHistorySvg({ color, ...props }: P) {
    return (
        <Svg
            width={17}
            height={17}
            viewBox="0 0 17 17"
            fill="none"
            {...props}
        >
            <Path
                d="M3.824 9.28a3.062 3.062 0 002.49-1.284 2.973 2.973 0 004.888.006 3.054 3.054 0 002.483 1.277c1.96 0 3.444-1.9 2.965-3.802l-.935-3.711a1.266 1.266 0 00-1.23-.958H2.988c-.582 0-1.087.394-1.23.958L.83 5.455c-.265 1.052.083 1.969.698 2.804v7.276c0 .698.564 1.267 1.264 1.267h11.895c.699 0 1.263-.569 1.263-1.267v-4.719a.562.562 0 00-.564-.554.562.562 0 00-.564.554v4.719c0 .087-.048.173-.135.173H11.2v-4.329a.558.558 0 00-.555-.558H6.834a.558.558 0 00-.555.558v4.329H2.792c-.088 0-.136-.086-.136-.173V9.046c.342.152.755.233 1.168.233zm7.922-7.378h2.739c.073 0 .136.056.154.127l.934 3.715c.304 1.207-.636 2.425-1.884 2.425a1.944 1.944 0 01-1.943-1.946V1.902zm-4.852 0h3.759v4.321c0 1.043-.816 1.948-1.882 1.948-1.083 0-1.877-.915-1.877-1.966V1.902zm.512 10.047h2.666v3.759H7.406v-3.76zM1.905 5.726l.93-3.697a.166.166 0 01.153-.127h2.778v4.303a1.963 1.963 0 01-1.959 1.966c-1.26-.001-2.21-1.224-1.902-2.445z"
                fill={color ?? "#A6CE39"}
            />
        </Svg>
    )
}

export default TransactionHistorySvg