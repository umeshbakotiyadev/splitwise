import { useThemeX } from "hooks";
import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps, Rect } from "react-native-svg"


interface P extends SvgProps {
  props?: any;
  color?: string;
}

function CameraImgPickSvg({ color, ...props }: P) {

  const { col } = useThemeX();

  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_810_502)"
        stroke={color ? color : col.BLACK}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M5 7h1a2 2 0 002-2 1 1 0 011-1h6a1 1 0 011 1 2 2 0 002 2h1a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" />
        <Path d="M12 16a3 3 0 100-6 3 3 0 000 6z" />
      </G>
      <Defs>
        <ClipPath id="clip0_810_502">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CameraImgPickSvg
