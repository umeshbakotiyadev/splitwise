import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function CreatePostSvg({ color, ...props }: P) {
    return (
        <Svg
            width={73}
            height={72}
            viewBox="0 0 73 72"
            fill="none"
            {...props}
        >
            <Path
                d="M72.737 36c0 19.883-16.118 36-35.997 36s-36-16.117-36-36 16.117-36 36-36 35.997 16.117 35.997 36z"
                fill="#F4F4F4"
            />
            <Path
                d="M61.936 22.612v31.666a3.124 3.124 0 01-3.124 3.125H14.665a3.124 3.124 0 01-3.125-3.125V22.612h50.396z"
                fill="#A6CE39"
            />
            <Path
                opacity={0.1}
                d="M61.936 22.607v31.67a3.124 3.124 0 01-3.124 3.124H14.665a3.122 3.122 0 01-3.125-3.124v-1.03h43.114c1.731 0 3.128-1.4 3.128-3.125V22.607h4.154z"
                fill="#000"
            />
            <Path
                d="M61.936 22.611v-4.889c0-1.724-1.4-3.124-3.124-3.124H14.665a3.127 3.127 0 00-3.125 3.124v4.89h50.4-.004z"
                fill="#2B4C5A"
            />
            <Path
                opacity={0.3}
                d="M61.865 17.05a2.946 2.946 0 00-.674-.076h-44.15a3.124 3.124 0 00-3.125 3.125v2.512h-2.38v-4.889c0-1.728 1.401-3.124 3.125-3.124h44.15a3.117 3.117 0 013.05 2.448l.004.003z"
                fill="#fff"
            />
            <Path
                d="M58.574 28.66H40.32v2.85h18.255v-2.85zM35.365 26.845H16.498c-.881 0-1.595.714-1.595 1.595v14.284c0 .881.714 1.595 1.595 1.595h18.867c.881 0 1.595-.714 1.595-1.595V28.44c0-.881-.714-1.595-1.595-1.595z"
                fill="#2B4C5A"
            />
            <Path
                d="M34.724 44.319H17.138l6.959-9.119 4.1 5.375 1.833-2.405 4.694 6.149zM30.325 33.127a1.571 1.571 0 01-3.14 0 1.569 1.569 0 113.14 0z"
                fill="#A6CE39"
            />
            <Path
                d="M61.936 22.612v31.666a3.124 3.124 0 01-3.124 3.125H14.665a3.124 3.124 0 01-3.125-3.125V22.612h50.396z"
                stroke="#000"
                strokeWidth={0.861616}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M61.936 22.611v-4.889c0-1.724-1.4-3.124-3.124-3.124H14.665a3.127 3.127 0 00-3.125 3.124v4.89h50.4-.004zM27.74 18.605h18.648M58.574 53.165H14.903M58.574 49.666H14.903M40.319 34.873h18.255M40.319 38.69h18.255M40.319 42.505h18.255M58.574 28.66H40.32v2.85h18.255v-2.85zM35.365 26.845H16.498c-.881 0-1.595.714-1.595 1.595v14.284c0 .881.714 1.595 1.595 1.595h18.867c.881 0 1.595-.714 1.595-1.595V28.44c0-.881-.714-1.595-1.595-1.595z"
                stroke="#000"
                strokeWidth={0.861616}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M34.724 44.319H17.138l6.959-9.119 4.1 5.375 1.833-2.405 4.694 6.149zM30.325 33.127a1.571 1.571 0 01-3.14 0 1.569 1.569 0 113.14 0z"
                stroke="#000"
                strokeWidth={0.861616}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M62.646 18.605a5.497 5.497 0 01-5.5 5.497 5.494 5.494 0 01-5.498-5.497 5.5 5.5 0 0110.998 0z"
                fill="#A6CE39"
            />
            <Path
                d="M62.646 18.605a5.497 5.497 0 01-5.5 5.497 5.494 5.494 0 01-5.498-5.497 5.5 5.5 0 0110.998 0zM57.148 16.326v4.561M59.428 18.605H54.87"
                stroke="#000"
                strokeWidth={0.843127}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default CreatePostSvg