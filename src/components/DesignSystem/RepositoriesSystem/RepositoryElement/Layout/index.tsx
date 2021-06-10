import * as React from "react";
import { IRepositoryElementLayout } from "../data";
import './styles.scss'
import { CardWrapper, ListWrapper, Text, CardElement } from '../../../../../components'

export function RepositoryElement({ ListElements }: IRepositoryElementLayout) {
  return (
    <div className="RepositoryElement">
      <Text title="Nome do repositório" font="bolder" />
      <div className="RepositoryElement-content"> 
        <CardElement title={"Descrição"} value= "Esse Projeto é baseado em ReactJS utilizando TypeScript" />
        <CardElement title={"Tamanho"} value= "1234 Bytes" />
        <CardElement title={"Linguagens"} value= "React, TypeScript e SCSS" />
        <CardElement title={"issues Abertas"} value= "12" />        
      </div>
    </div>
  )
}