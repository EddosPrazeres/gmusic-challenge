import * as React from "react";
import { IDetailsLayout, JSONUsers } from "../data";
import { CardUserName, Header, CardDetails, CardWrapper, Text, CardElement, ListWrapper, RepositoriesList } from '../../../components'
import './styles.scss'

export default function DetailsView({ title= "DetailsView" }: IDetailsLayout) {
  return (
    <div className="DetailsView">
      <Header title="Detalhes de usuário do Github" hasBack/> 
      <CardUserName {...JSONUsers[0]} />
      <CardDetails />
      <CardDetails title="Repositorios"/>
      <RepositoriesList ListElements={[0,1,2,3,4,5,6,7,8,9]} />
    </div>
  );
}
