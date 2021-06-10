import * as React from "react";
import { CardWrapper, Text, CardElement, CardUserName, CardDetails, Header, SearchSystem, ListWrapper } from "../../../components";
import { IHomeLayout, JSONUsers } from "../data";
import './styles.scss'

export default function HomeView({ title= "HomeView" }: IHomeLayout) {
  return (
    <div className="HomeView">
        <Header title="Busca de Usuários do Github"/>
        <SearchSystem title="Procurar usuário" titleButton="Pesquisar" />
        <div className="CardList"> 
         <ListWrapper 
          ListElements={JSONUsers}
          ItemComponent={CardUserName}
          link="/details" 
        />
        </div>
    </div>
  );
}
