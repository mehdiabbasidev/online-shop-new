"use client";
import React, { forwardRef, useState } from "react";
import { InputProps } from "./input.types";
import classNames from "classnames";


export const Input: React.FC<InputProps> = forwardRef<
  HTMLInputElement,
  InputProps
>(
  (
    {
      compSize,
      color,
      variant,
      shape,
      isDisabled = false,
      type = "text",
      label = "",
      helperText = "",
      byIcon = false,
      icon,
      id,
      className,
      ...res
    },
    ref
  ) => {
    const labelClasses = classNames({ "input--label": label });
    const inputClasses = classNames(
      "input",
      className,
      { [`input--${variant}`]: variant },
      { [`input--${color}`]: color },
      { [`input--${compSize}`]: compSize },
      { [`input--${shape}`]: shape },
      { "input--icon": byIcon }
    );
    const iconhelperTextClassees = classNames({ "input--iconhelpertext": helperText });
    const helperTextClassees = classNames({ "input--helpertext": helperText });
    return (
      <>
        <div className="flex items-center">
        
        
          {label && (
            <label htmlFor={id} className={labelClasses}>
              {label}
            </label>
          )}



          {byIcon ? (
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                {icon}
              </div>
              <input
                ref={ref}
                id={id}
                type={type}
                disabled={isDisabled}
                className={inputClasses}
                {...res}
              />
            </div>
          ) : (
            <input
              ref={ref}
              id={id}
              type={type}
              disabled={isDisabled}
              className={inputClasses}
              {...res}
            />
          )}



          {helperText && (
            <div className="group">
              <span className={iconhelperTextClassees}>!</span>
              <span className={helperTextClassees}>
                {helperText}
              </span>
            </div>
          )}

          
        </div>
      </>
    );
  }
);

Input.displayName = "Input";