import React, { useEffect } from "react";
import IHome from "./data";
import Layout from "./Layout";
import { useUser } from '../../hooks'

export default function HomeView(props: IHome) {
  const { users, getUsers, userSearched, hasNotFound } = useUser();

  useEffect(()=> {
    getUsers();
    
  }, [])

  const hasMore = () => {
    if (!!userSearched.length) return 
    if (!!!userSearched.length && !!!users.length) return
    if (hasNotFound) return
    
    
    return true
  }
  
  return <Layout hasMore={hasMore()} users={users} />
}
