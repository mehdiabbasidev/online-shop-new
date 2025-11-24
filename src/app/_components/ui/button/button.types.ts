import { ButtonHTMLAttributes } from "react";
import { BaseComponent } from "../base-component.types";


export type ButtonState="default" | "link" | "outline";
export type ButtonShape = "default" | "wide" | "square" | "pill" | "full" ;

export type ButtonProps =
    ButtonHTMLAttributes<HTMLButtonElement> &
    BaseComponent &
    {
        shape?: ButtonShape,
        isLoading? : boolean,
        loadingText? : string,
        animIcon? :boolean,
        state?:ButtonState
    }