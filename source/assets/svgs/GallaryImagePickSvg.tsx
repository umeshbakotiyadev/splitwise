import { useThemeX } from "hooks";
import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps, Rect } from "react-native-svg"


interface P extends SvgProps {
  props?: any;
  color?: string;
}

function GallaryImagePickSvg({ color, ...props }: P) {

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
        clipPath="url(#clip0_810_495)"
        stroke={color ? color : col.BLACK}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M18 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2zM4 16h16" />
        <Path d="M4 12l3-3c.928-.893 2.072-.893 3 0l4 4" />
        <Path d="M13 12l2-2c.928-.893 2.072-.893 3 0l2 2M14 7h.01" />
      </G>
      <Defs>
        <ClipPath id="clip0_810_495">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default GallaryImagePickSvg
