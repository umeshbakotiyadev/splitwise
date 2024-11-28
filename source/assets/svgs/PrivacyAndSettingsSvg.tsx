import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function PrivacyAndSettingsSvg({ color, ...props }: P) {
    return (
        <Svg
            width={14}
            height={16}
            viewBox="0 0 14 16"
            fill="none"
            {...props}
        >
            <Path
                d="M13.204 3.029a.62.62 0 00-.61-.61H10.72a1.26 1.26 0 01-1.265-1.264.62.62 0 00-.609-.61H5.098a.62.62 0 00-.61.61A1.26 1.26 0 013.223 2.42H1.35a.62.62 0 00-.609.609v3.749c0 3.84 2.39 7.355 5.998 8.76h.234c.094 0 .14 0 .234-.046 3.608-1.359 6.044-4.873 6.044-8.762l-.046-3.701zM6.971 14.274c-2.999-1.265-5.013-4.217-5.013-7.497v-3.14h1.264A2.516 2.516 0 005.66 1.764H8.33a2.516 2.516 0 002.437 1.875h1.265v3.139a8.3 8.3 0 01-5.06 7.497z"
                fill={color ?? "#A6CE39"}
            />
            <Path
                d="M6.972 4.293A2.5 2.5 0 004.49 6.777c0 .703.281 1.36.796 1.78l-.75 1.688c-.093.187-.046.421.047.609.094.187.328.281.515.281h3.75c.186 0 .421-.094.514-.281.094-.188.141-.375.047-.61l-.75-1.687a2.446 2.446 0 00.797-1.827c0-1.311-1.123-2.437-2.483-2.437zm.375 4.312l.563 1.311H6.035l.563-1.265c.14-.281 0-.609-.234-.796a1.24 1.24 0 01-.61-1.078A1.26 1.26 0 017.02 5.512a1.26 1.26 0 011.265 1.265c0 .422-.234.843-.61 1.078-.328.14-.421.468-.328.75z"
                fill={color ?? "#A6CE39"}
            />
        </Svg>
    )
}

export default PrivacyAndSettingsSvg