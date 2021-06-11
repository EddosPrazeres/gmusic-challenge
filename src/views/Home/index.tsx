import React, { useEffect } from "react";
import IHome from "./data";
import Layout from "./Layout";
import { useUser } from '../../hooks'

export default function HomeView(props: IHome) {
  const { users, getUsers } = useUser();

  useEffect(()=> {
    getUsers();
    
  }, [getUsers])
  
  return <Layout users={users} />
}
