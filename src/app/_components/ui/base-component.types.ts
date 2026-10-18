import { Color } from "@/app/_components/types/color.type";
import { Size } from "@/app/_components/types/size.type";
import { Variant } from "@/app/_components/types/variant.type";


// import { Color } from "./types/color.type";
// import { Size } from "./types/size.type";
// import { Variant } from "./types/variant.type";

export type BaseComponent={
    compSize?:Size,
    color?:Color,
    variant?:Variant,
    isDisabled?:boolean,
}