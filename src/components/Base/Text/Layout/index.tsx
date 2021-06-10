import * as React from "react";
import { ITextLayout } from "../data";
import './styles.scss'

export function Text({ 
  title= "HomeView",
  size = "medium",
  font = "normal",
  ...props 
}: ITextLayout) {
  return (
    <span 
      className="Text"
      style={{
        fontSize: size,
        fontWeight: font
      }}
      {...props}>
        {title}
    </span>
  )
}