import React, { forwardRef, InputHTMLAttributes } from "react";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  text?: React.ReactNode;
  /** برای حالت پیش‌فرضِ تیک‌خورده وقتی کنترل‌شده نیست */
  isChecked?: boolean;
};

export const CheckBox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    text ,
    isChecked,            
    checked,             
    className,
    ...rest
  } = props;

  const defaultChecked = checked === undefined ? isChecked : undefined;

  return (
    <label className="inline-flex items-center gap-2 text-sm text-foreground cursor-pointer select-none">
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        className={
          [
            "peer h-4 w-4 rounded border-border focus:ring-0 bg-white",
            "accent-[#FD9636]",
            className
          ].filter(Boolean).join(" ")
        }
        {...rest}
      />
      <span className="text-sm text-shop-gray-500 peer-checked:text-black">{text}</span>
    </label>
  );
});

CheckBox.displayName = "CheckBox";
