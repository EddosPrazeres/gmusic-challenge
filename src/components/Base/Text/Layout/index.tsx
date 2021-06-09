import * as React from "react";
import { ITextLayout } from "../data";
import { FontSize } from '../data'
import './styles.scss'

export function Text({ 
  title= "HomeView",
  fontSize = FontSize.medium,
  ...props 
}: ITextLayout) {
  return (
    <span 
      className="Text"
      style={{
        fontSize: fontSize,
      }}
      {...props}>
        {title}
    </span>
  )
}