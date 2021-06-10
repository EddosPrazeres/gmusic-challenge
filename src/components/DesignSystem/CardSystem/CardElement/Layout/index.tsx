import * as React from "react";
import { ICardElementLayout } from "../data";
import './styles.scss'
import { Text } from '../../../../../components'

export function CardElement({ title, value }: ICardElementLayout) {
  return (
    <div className="CardElement">
      <Text title={title} size="small" font="bold"/> 
      <Text title={value} size="small"/> 
    </div>
  )
}