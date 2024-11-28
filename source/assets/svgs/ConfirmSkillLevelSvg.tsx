import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function ConfirmSkillLevelSvg({ color, ...props }: P) {
    return (
        <Svg
            width={72}
            height={72}
            viewBox="0 0 72 72"
            fill="none"
            {...props}
        >
            <Path
                d="M71.996 36c0 19.883-16.117 36-35.996 36C16.12 72 0 55.883 0 36S16.117 0 36 0s35.996 16.117 35.996 36z"
                fill="#F4F4F4"
            />
            <Path
                d="M59.825 21.366v32.81a2.955 2.955 0 01-2.956 2.956H15.113a2.955 2.955 0 01-2.956-2.956v-32.81h47.668z"
                fill="#A6CE39"
            />
            <Path
                d="M59.825 21.367v-4.623a2.958 2.958 0 00-2.955-2.955H15.11a2.958 2.958 0 00-2.956 2.955v4.623h47.671z"
                fill="#2B4C5A"
            />
            <Path
                opacity={0.3}
                d="M59.714 15.94a2.961 2.961 0 00-.803-.111h-41.76a2.953 2.953 0 00-2.956 2.956v2.584h-2.04v-4.622a2.953 2.953 0 012.955-2.956h41.76c1.354 0 2.495.907 2.844 2.153v-.004z"
                fill="#fff"
            />
            <Path
                d="M59.825 21.366v32.81a2.955 2.955 0 01-2.956 2.956H15.113a2.955 2.955 0 01-2.956-2.956v-32.81h47.668z"
                stroke="#000"
                strokeWidth={0.817241}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M59.825 21.367v-4.623a2.958 2.958 0 00-2.955-2.955H15.11a2.958 2.958 0 00-2.956 2.955v4.623h47.671zM27 17.58h17.636"
                stroke="#000"
                strokeWidth={0.817241}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M27.52 35.73a3.596 3.596 0 10-5.085-5.086 3.596 3.596 0 005.086 5.086z"
                fill="#2B4C5A"
                stroke="#000"
                strokeWidth={1.0687}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                opacity={0.3}
                d="M26.255 29.826c.151.396.238.828.238 1.278a3.595 3.595 0 01-4.875 3.358 3.6 3.6 0 003.359 2.322 3.595 3.595 0 001.278-6.955v-.003z"
                fill="#fff"
            />
            <Path
                d="M32.332 45.273a3.224 3.224 0 01-3.218 3.218h-8.27a3.233 3.233 0 01-3.218-3.218c.007-3.438 2.79-6.228 6.228-6.232h2.257c3.438.008 6.228 2.794 6.228 6.232h-.007z"
                fill="#A6CE39"
                stroke="#000"
                strokeWidth={1.0687}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                opacity={0.1}
                d="M29.333 39.956c.576.943.914 2.048.914 3.233a3.224 3.224 0 01-3.218 3.218h-8.27c-.341 0-.67-.057-.979-.158a3.235 3.235 0 003.064 2.239h8.27a3.226 3.226 0 003.217-3.218 6.224 6.224 0 00-2.995-5.318l-.003.004z"
                fill="#000"
            />
            <Path
                d="M32.332 45.273a3.224 3.224 0 01-3.218 3.218h-8.27a3.233 3.233 0 01-3.218-3.218c.007-3.438 2.79-6.228 6.228-6.232h2.257c3.438.008 6.228 2.794 6.228 6.232h-.007zM27.52 35.73a3.596 3.596 0 10-5.085-5.086 3.596 3.596 0 005.086 5.086z"
                stroke="#000"
                strokeWidth={1.0687}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M46.919 47.412c-.306 0-.616-.018-.922-.058-3.517-.425-6.307-3.193-6.728-6.692-.03-.317-.058-.634-.058-.962a7.679 7.679 0 017.7-7.7c.155 0 .3.01.443.018a7.666 7.666 0 017.25 7.193c.011.162.019.327.019.5 0 4.248-3.453 7.7-7.7 7.7h-.004z"
                fill="#A6CE39"
                stroke="#000"
                strokeWidth={1.58271}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M49.999 36.616l-6.175 6.176M50 42.791l-6.176-6.175"
                stroke="#000"
                strokeWidth={1.26469}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default ConfirmSkillLevelSvg
