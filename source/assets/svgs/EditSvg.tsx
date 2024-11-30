import * as React from "react"
import { ColorValue } from "react-native"
import Svg, { Path, SvgProps } from "react-native-svg"

interface P extends SvgProps {
  color?: ColorValue;
}

function EditSvg({ color, ...props }: P) {
  return (<Svg
height="28px"
viewBox="0 -960 960 960"
width="28px"
fill={color}
{...props}
>
<Path d="M193.33-120q-14.33 0-23.83-9.5-9.5-9.5-9.5-23.83v-81q0-13.34 5.33-25.84 5.34-12.5 14.34-21.5L716.33-818q11.34-11.33 24-16.67Q753-840 766.67-840q13.33 0 25.83 5.33Q805-829.33 816-818l42 42q11.33 10.33 16.67 22.83 5.33 12.5 5.33 26.5 0 13-5.33 26-5.34 13-16.67 24.34L321.67-139.67q-9 9-21.5 14.34-12.5 5.33-25.84 5.33h-81zm33.34-66.67h48l428.33-428L679-639l-24.33-24-428 428.33v48zm587.33-539L765.67-774 814-725.67zM679-639l-24.33-24L703-614.67 679-639zM560-120q76.67 0 138.33-36.67Q760-193.33 760-260q0-34.67-21.33-62.5-21.34-27.83-63.34-49.17-12-6.66-25.66-6-13.67.67-22 12-8.34 11.34-6.67 25.84t13.67 21.16q26.66 13.67 42.66 28.34 16 14.66 16 30.33 0 29-39.16 51.17Q615-186.67 560-186.67q-13.67 0-23.5 9.5t-9.83 23.84q0 13.66 9.83 23.5Q546.33-120 560-120zM366.67-719.33q0 18-18.5 31.83-18.5 13.83-83.5 39.5-89.34 34.33-117 62.5Q120-557.33 120-520q0 34 22 56t50.33 35q12.34 7 25 2.83 12.67-4.16 19-16.5 6.34-12.33 2.67-24.66-3.67-12.34-16-19.34-17.67-7.66-27-16-9.33-8.33-9.33-17.33 0-14.67 20.33-28.33Q227.33-562 291.33-587q84.67-33.33 113.34-62.67 28.66-29.33 28.66-69.66 0-55.67-42-88.17T280-840q-43 0-77.5 15t-52.17 37.33q-9 10.34-8 23.67 1 13.33 12.67 22 11 9 24.67 7.33 13.66-1.66 22.66-10.66 14.67-14.67 33-21.34 18.34-6.66 44.67-6.66 44.33 0 65.5 16t21.17 38z" />
</Svg>
  )
}

export default React.memo(EditSvg);
