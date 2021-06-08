import * as React from "react";
import { ITextLayout } from "../data";

import './styles.scss'

export function Text({ title= "HomeView", ...props }: ITextLayout) {
  return (
    <span 
      className="Text"
      {...props}>
        {title}
    </span>
  )
}