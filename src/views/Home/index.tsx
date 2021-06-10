import React, { useEffect } from "react";
import IHome from "./data";
import Layout from "./Layout";
import { useUser } from '../../hooks'
import { Ancor } from "../../components";

export default function HomeView(props: IHome) {
  const { users, getUsers } = useUser();

  useEffect(()=> {
    getUsers();
    
  }, [])
  
  return <Layout users={users} />
}
