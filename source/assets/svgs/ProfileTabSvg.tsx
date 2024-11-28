import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { G, Mask, Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function ProfileTabSvg({ color, ...props }: P) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            {...props}>
            <Mask
                id="a"
                // style={{
                //     maskType: "luminance"
                // }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={20}
                height={20}
            >
                <Path d="M0 0h20v20H0V0z" fill={color ?? "#fff"} />
            </Mask>
            <G mask="url(#a)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 10a9.967 9.967 0 01-2.773 6.912A9.972 9.972 0 0110.03 20h-.06a9.971 9.971 0 01-7.197-3.088A9.966 9.966 0 010 10C0 4.477 4.477 0 10 0s10 4.477 10 10zm-3.939 5A7.84 7.84 0 0010 12.143 7.841 7.841 0 003.939 15 7.841 7.841 0 0010 17.857 7.84 7.84 0 0016.061 15zm-6.06-4.286a3.571 3.571 0 100-7.143 3.571 3.571 0 000 7.143z"
                    fill={color ?? "#fff"}
                />
            </G>
        </Svg>
    )
}

export default ProfileTabSvg
