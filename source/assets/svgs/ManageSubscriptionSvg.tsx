import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { G, Mask, Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function ManageSubscriptionSvg({ color, ...props }: P) {
    return (
        <Svg
            width={17}
            height={17}
            viewBox="0 0 17 17"
            fill="none"
            {...props}
        >
            <Path
                d="M16.602 4.109L13.465.97a.47.47 0 00-.332-.138H5.917c-.779 0-1.412.634-1.412 1.412v6.207A4.241 4.241 0 00.74 12.66a4.24 4.24 0 004.236 4.235h10.352c.779 0 1.412-.633 1.412-1.412V4.442a.47.47 0 00-.138-.332zM13.603 2.44l1.53 1.53h-1.53V2.44zM1.681 12.66a3.298 3.298 0 013.295-3.293A3.298 3.298 0 018.27 12.66a3.298 3.298 0 01-3.294 3.294 3.298 3.298 0 01-3.295-3.294zm13.648 3.295H7.633a4.233 4.233 0 001.55-2.823h4.89a.47.47 0 000-.942h-4.89a4.209 4.209 0 00-.689-1.882h5.579a.47.47 0 000-.941h-6.44a4.216 4.216 0 00-2.188-.915V2.245c0-.26.211-.47.47-.47h6.746V4.44c0 .26.21.47.47.47H15.8v10.574c0 .259-.211.47-.47.47z"
                fill={color ?? "#A6CE39"}
            />
            <Path
                d="M14.074 6.543H7.172a.47.47 0 000 .941h6.902a.47.47 0 000-.94zM6.23 13.132a.47.47 0 000-.941h-.784v-1.412a.47.47 0 00-.941 0v1.882c0 .26.21.47.47.47H6.23z"
                fill={color ?? "#A6CE39"}
            />
        </Svg>
    )
}

export default ManageSubscriptionSvg
