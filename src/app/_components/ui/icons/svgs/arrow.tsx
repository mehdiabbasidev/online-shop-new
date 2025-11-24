import {BaseIcon} from "../base-icon";
import { SVGAttributes } from "react";

 export default function SvgIcon(props:SVGAttributes<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <g clip-path="url(#a)"><path d="M0.452636 1.55494L0.452637 5.70828L0.452637 9.4483C0.452637 10.0883 1.22597 10.4083 1.67931 9.95497L5.13264 6.50161C5.68598 5.94828 5.68598 5.04828 5.13264 4.49495L3.81931 3.18161L1.67931 1.04161C1.22597 0.594945 0.452636 0.914946 0.452636 1.55494Z"/></g><defs><clipPath id="a"><rect width="6" height="10"/></clipPath></defs>
    </BaseIcon>
  );
}