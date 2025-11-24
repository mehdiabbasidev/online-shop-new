
import { SVGAttributes } from "react";
import { BaseIcon } from "../base-icon";

 export default function SvgIcon(props:SVGAttributes<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16"/>
    </BaseIcon>
  );
}