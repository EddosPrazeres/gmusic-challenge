import * as React from "react";
import { IRepositoryElementLayout } from "../data";
import './styles.scss'
import { CardWrapper, ListWrapper, Text, CardElement, Ancor } from '../../../../../components'

export function RepositoryElement({ name, description, size, language, open_issues, html_url }: IRepositoryElementLayout) {
  return (
    <div className="RepositoryElement">
      <Text title={name} font="bolder" />
      <div className="RepositoryElement-content"> 
        <CardElement title={"Descrição"} value={description} />
        <CardElement title={"Tamanho"} value={`${size} bytes`} />
        <CardElement title={"Linguagens"} value={language}/>
        <CardElement title={"Issues Abertas"} value={open_issues} />           
        <Ancor title="Abrir repositório" link={html_url}/>  
      </div>
    </div>
  )
}