import * as React from "react";
import { CardWrapper, Text, CardElement, CardUserName, CardDetails, Header, SearchSystem, ListWrapper, Ancor } from "../../../components";
import { useUser } from "../../../hooks";
import { IHomeLayout } from "../data";
import './styles.scss'

export default function HomeView({ users }: IHomeLayout) {
  const { getUsers } = useUser();
  return (
    <div className="HomeView">
        <Header title="Busca de Usuários do Github"/>
        <SearchSystem title="Procurar usuário" titleButton="Pesquisar" />        
         <ListWrapper 
          ListElements={users}
          ItemComponent={CardUserName}
          link="/details" 
        />
        <Ancor onClick={getUsers} title="Mostrar mais"/>        
    </div>
  );
}
