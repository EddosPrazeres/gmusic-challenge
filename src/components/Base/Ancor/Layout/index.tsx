import * as React from "react";
import { Text } from "../../../../components";
import { IAncorLayout } from "../data";
import './styles.scss'

export function Ancor({ 
  title,
  target="_blank",
  link,
  onClick,
  ...props 
}: IAncorLayout) {
  return (
    <a 
      className="Ancor"
      target={target}
      onClick={onClick}
      href={link}>
        <Text title={title} size="smaller" />
    </a>
  )
}