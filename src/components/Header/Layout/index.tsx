import * as React from "react";
import { Text } from "../../Base";
import { IHeaderLayout } from "../data";
import './styles.scss'

export function Header({ 
  title, 
  hasBack,
  ...props 
}: IHeaderLayout) {
  return (
    <div className="Header">
      {hasBack && <a className="Header-back" href="/">Voltar</a>}
      <Text title={title} size="larger"/>
    </div>
  )
}