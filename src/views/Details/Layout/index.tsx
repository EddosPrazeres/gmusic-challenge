import * as React from "react";
import { IDetailsLayout } from "../data";
import { CardUserName, Header, CardDetails, RepositoriesList } from '../../../components'
import './styles.scss'

export default function DetailsView({ user }: IDetailsLayout) {
  return (
    <div className="DetailsView">
      <Header title="Detalhes de usuário do Github" hasBack/> 
      <CardUserName {...user} />
      <CardDetails {...user}/>
      <CardDetails title="Repositorios"/>
      <RepositoriesList />
    </div>
  );
}
