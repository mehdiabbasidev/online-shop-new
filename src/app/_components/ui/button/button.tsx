import React from "react";
import { ButtonProps } from "./button.types";
import classNames from "classnames"


export const Button: React.FC<ButtonProps> = (props) => {
    const {
        compSize,
        color,
        variant,
        shape,
        state = "default",
        isDisabled = false,
        isLoading = false,
        animIcon = false,
        loadingText = "Loading...",
        className,
        children,
        ...rest
    } = { ...props }


    const btnClasses = classNames(
        'btn',
        className,
        { [`btn--${color}`]: color },
        { [`btn--${compSize}`]: compSize },
        { [`btn--${variant}`]: variant },
        { [`btn--${state}`]: state },
        { [`btn--${shape}`]: shape },
        { "anim-icon": animIcon },
        { "pointer-events-none": isLoading },
    )

    const loadingClasses = classNames(
        { "btn--loading": isLoading }
    );
    return (
        <>
            <button className={btnClasses} disabled={isDisabled} {...rest}>
                {isLoading ?
                    <>
                        <span className={loadingClasses}></span>
                        <span>{loadingText}</span>
                    </>
                    :
                    children
                }
            </button>
        </>
    );
};

Button.displayName = "Button";