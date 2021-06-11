import * as React from "react";
import { Text } from "../../../../components";
import './styles.scss'

export function Empty() {  
  return (
    <div className="Empty"> 
      <img src="https://www.2net.com.br//Repositorio/251/Publicacoes/28370/9bd14bbe-1.png"/>
      <Text title="Nenhum dado encontrado : /" font="bold" size="large" />
    </div>
  )
}