import {BaseIcon} from "../base-icon";
import { SVGAttributes } from "react";

 export default function SvgIcon(props:SVGAttributes<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path d="M27 16H5" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 7L5 16L14 25" strokeLinecap="round" strokeLinejoin="round"/>
    </BaseIcon>
  );
}