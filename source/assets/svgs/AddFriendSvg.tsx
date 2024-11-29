import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
  color?: ColorValue;
}

function AddFriendSvg({ color, ...props }: P) {
  return (
    <Svg
      height="35px"
      viewBox="0 -960 960 960"
      width="35px"
      fill={color}
      {...props}
    >
      <Path d="M730-400v-130H600v-60h130v-130h60v130h130v60H790v130h-60zm-370-81q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42zM40-160v-94q0-35 17.5-63.5T108-360q75-33 133.34-46.5t118.5-13.5Q420-420 478-406.5T611-360q33 15 51 43t18 63v94H40zm60-60h520v-34q0-16-9-30.5T587-306q-71-33-120-43.5T360-360q-58 0-107.5 10.5T132-306q-15 7-23.5 21.5T100-254v34zm260-321q39 0 64.5-25.5T450-631q0-39-25.5-64.5T360-721q-39 0-64.5 25.5T270-631q0 39 25.5 64.5T360-541zm0-90zm0 411z" />
    </Svg>
  )
}

export default React.memo(AddFriendSvg);
