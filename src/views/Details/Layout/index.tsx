import * as React from "react";
import { IDetailsLayout, JSONUsers } from "../data";
import { CardUserName, Header, CardDetails, CardWrapper, Text, CardElement, ListWrapper, RepositoriesList } from '../../../components'
import './styles.scss'

export default function DetailsView({ user, userRepositories }: IDetailsLayout) {
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
