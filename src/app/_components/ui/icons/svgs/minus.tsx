import {BaseIcon} from "../base-icon";
import { SVGAttributes } from "react";

 export default function SvgIcon(props:SVGAttributes<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path d="M11 16H21.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </BaseIcon>
  );
}