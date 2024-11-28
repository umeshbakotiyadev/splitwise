import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function ProfileEditSvg({ color, ...props }: P) {
    return (
        <Svg
            width={20}
            height={21}
            viewBox="0 0 20 21"
            fill="none"
            {...props}
        >
            <Path
                d="M16.774.916c-.832 0-1.665.333-2.248.916l-3.205 3.25H2.497A2.506 2.506 0 000 7.582v10.834c0 1.375 1.123 2.5 2.497 2.5H13.32a2.505 2.505 0 002.497-2.5V9.583l3.248-3.25a3.172 3.172 0 000-4.501 3.317 3.317 0 00-2.29-.916zm-2.623 17.5a.836.836 0 01-.832.833H2.497a.836.836 0 01-.832-.833V7.582c0-.458.374-.833.832-.833h7.159L6.784 9.624c-1.664 1.667-2.622 3.917-2.58 6.291 0 .459.375.834.833.834 2.372 0 4.62-.916 6.285-2.583l2.872-2.875-.001 7.125h-.042zm3.705-13.25l-7.784 7.791C8.95 14.082 7.45 14.832 5.87 15c.208-1.584.915-3.084 2.04-4.208l7.782-7.792c.624-.584 1.582-.5 2.164.083.542.625.542 1.5.001 2.083z"
                fill={color ?? "#747474"}
            />
        </Svg>
    )
}

export default ProfileEditSvg
