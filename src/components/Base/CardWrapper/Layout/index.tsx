import * as React from "react";
import { ICardWrapperLayout } from "../data";
import './styles.scss'

export function CardWrapper({ children, link }: ICardWrapperLayout) {
  return (
    <a className="CardWrapper" href={link}> {children} </a>
  )
}