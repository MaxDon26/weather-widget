/* eslint-disable react/display-name */
import { forwardRef } from "react";
import style from "./TextField.module.sass";

export const TextField = forwardRef((props, ref) => {
  return <input className={style.textField} ref={ref} {...props} />;
});
