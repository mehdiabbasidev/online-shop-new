import {BaseIcon} from "../base-icon";
import { SVGAttributes } from "react";

 export default function SvgIcon(props:SVGAttributes<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path d="M0.5 0.5L4 4L0.5 7.5" strokeLinecap="round" strokeLinejoin="round"/>
    </BaseIcon>
  );
}