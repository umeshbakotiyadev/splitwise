import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
    color?: ColorValue;
}

function BackSvg({ color, ...props }: P) {
    return (
            <Svg
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
            fill={color}
            {...props}
          >
            <Path d="M561-240L320-481l241-241 43 43-198 198 198 198-43 43z" />
          </Svg>
    )
}

export default React.memo(BackSvg);
