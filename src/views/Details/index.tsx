import React, { useEffect } from "react";
import IDetails from "./data";
import Layout from "./Layout";
import { useUser } from '../../hooks'

export default function DetailsView(props: IDetails) {
  const { userSearched, getSpecificUser, users, getRepositories, userRepositories } = useUser();
  
  useEffect(()=> {   
    getSpecificUser(props?.match?.params.id)    
  }, [])

  useEffect(()=> {
    if (!!!userSearched.length) return

    const { login, type } = userSearched[0];
    
    getRepositories({type, login})    
  }, [userSearched])

  return <Layout user={users[0]}/>;
}
