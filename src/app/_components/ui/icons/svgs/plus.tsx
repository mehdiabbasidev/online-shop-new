import {BaseIcon} from "../base-icon";
import { SVGAttributes } from "react";

 export default function SvgIcon(props:SVGAttributes<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path d="M16 10.6641V21.3307" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.666 16H21.3327" strokeLinecap="round" strokeLinejoin="round"/>
    </BaseIcon>
  );
}