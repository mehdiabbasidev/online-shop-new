import {BaseIcon} from "../base-icon";
import { SVGAttributes } from "react";

 export default function SvgIcon(props:SVGAttributes<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <rect width="34.6667" height="34" rx="4"/><path d="M12 13H22.6667M12 15.6667H22.6667M12 18.3333H22.6667M12 21H22.6667" strokeWidth="1.3333" strokeLinecap="round" strokeLinejoin="round"/>
    </BaseIcon>
  );
}