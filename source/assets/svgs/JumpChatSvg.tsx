import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function JumpChatSvg({ color, ...props }: P) {
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
                d="M52.75 31.464a16.553 16.553 0 011.108 5.98c0 9.176-7.437 16.61-16.61 16.61h-16.61v-16.61c0-9.177 7.437-16.611 16.61-16.611.994 0 1.966.086 2.913.252"
                fill="#2B4C5A"
            />
            <Path
                d="M52.75 31.464a16.553 16.553 0 011.108 5.98c0 9.176-7.437 16.61-16.61 16.61h-16.61v-16.61c0-9.177 7.437-16.611 16.61-16.611.994 0 1.966.086 2.913.252"
                stroke="#000"
                strokeWidth={1.58271}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                opacity={0.3}
                d="M52.75 31.463l-2.053-1.692c.155.911.242 1.847.242 2.801 0 9.177-7.438 16.61-16.61 16.61H20.64v4.871h16.61c9.177 0 16.61-7.437 16.61-16.61 0-2.11-.395-4.125-1.108-5.98h-.004z"
                fill="#fff"
            />
            <Path
                d="M37.248 40.845a2.426 2.426 0 100-4.853 2.426 2.426 0 000 4.853zM45.77 40.845a2.426 2.426 0 100-4.853 2.426 2.426 0 000 4.853zM28.727 40.845a2.426 2.426 0 100-4.853 2.426 2.426 0 000 4.853zM47.659 32.534c-.306 0-.616-.018-.922-.058-3.517-.425-6.307-3.193-6.728-6.692a10.52 10.52 0 01-.058-.961 7.679 7.679 0 017.7-7.7c.155 0 .3.01.443.017a7.666 7.666 0 017.25 7.193c.012.162.019.328.019.5 0 4.248-3.453 7.7-7.7 7.7h-.004z"
                fill="#A6CE39"
                stroke="#000"
                strokeWidth={1.58271}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M52.75 31.464a16.553 16.553 0 011.108 5.98c0 9.176-7.437 16.61-16.61 16.61h-16.61v-16.61c0-9.177 7.437-16.611 16.61-16.611.994 0 1.966.086 2.913.252"
                stroke="#000"
                strokeWidth={1.58271}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M47.652 21.406v6.84M51.072 24.825h-6.84"
                stroke="#000"
                strokeWidth={1.26469}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default JumpChatSvg
