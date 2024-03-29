import * as React from "react";
import { IListWrapperLayout } from "../data";
import './styles.scss'

export function ListWrapper({ ListElements, link, ItemComponent }: IListWrapperLayout) {  
  return (
    <div className="ListWrapper"> 
      {ListElements.map((item: any) => (
        <ItemComponent key={`Item-${Math.random()}`} {...item} link={link} />
      ))}
    </div>
  )
}