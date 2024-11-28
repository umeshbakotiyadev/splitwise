import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { G, Mask, Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function ManagePaymentSvg({ color, ...props }: P) {
    return (
        <Svg
            width={17}
            height={17}
            viewBox="0 0 17 17"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.113 1.622C3.106.63 4.593.25 6.508.25h4.465c1.915 0 3.401.38 4.394 1.372.994.993 1.373 2.48 1.373 4.395v4.465c0 1.916-.38 3.402-1.373 4.395-.993.993-2.479 1.373-4.394 1.373H6.508c-1.916 0-3.402-.38-4.395-1.373C1.12 13.884.74 12.397.74 10.482V6.017c0-1.916.38-3.402 1.373-4.395zm.79.79c-.682.68-1.046 1.8-1.046 3.605v4.465c0 1.806.364 2.924 1.045 3.605.682.682 1.8 1.046 3.606 1.046h4.465c1.805 0 2.924-.364 3.605-1.046.681-.68 1.046-1.8 1.046-3.605V6.017c0-1.805-.365-2.924-1.046-3.605-.681-.682-1.8-1.046-3.605-1.046H6.508c-1.806 0-2.924.364-3.606 1.046z"
                fill={color ?? "#A6CE39"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.558 5.955c.243.189.288.54.099.783L10.934 8.96c-.442.56-1.259.662-1.828.222l-.004-.003-1.36-1.07a.189.189 0 00-.264.034l-1.77 2.3a.558.558 0 01-.885-.682l1.771-2.3a1.305 1.305 0 011.833-.234l.004.003L9.79 8.3a.195.195 0 00.268-.031l1.717-2.215a.558.558 0 01.783-.1z"
                fill={color ?? "#A6CE39"}
            />
        </Svg>
    )
}

export default ManagePaymentSvg
