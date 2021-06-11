import React from "react";

import {
  createContext,
  useContext,
  useState,
} from "react";

import {
  API,
} from "../utils";

interface IUserContext {
  users: IArrayUsers;
  getUsers(data?: any): Promise<any>;
  getSpecificUser(data?: any): Promise<any>;
  clearSpecificUser(data?: any): Promise<any>;
  getRepositories({type, login}: IUser): Promise<any>;
  userRepositories: any;
  userSearched: IArrayUsers;
  hasNotFound: boolean;
}


interface IArrayUsers extends Array<IUser>{}

interface IUser {
  type: string;
  login: string;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: any) => {
  const [users, setUsers] = useState<IArrayUsers>([] as IArrayUsers);
  const [userSearched, setUserSearched] = useState<IArrayUsers>([] as IArrayUsers);
  const [userRepositories, setUserRepositories ] = useState([])
  const [hasNotFound, setHasNotFound ] = useState(false)

  const getUsers = async (authToken: string) => { 
    try {
      const { data } = await API.get(`/users?per_page=30&since=${users.length}`)
      const newUsers = !!users.length ? [...users, ...data] : data
      setUsers(newUsers)
      return users
    } catch (error) {
      return "Error: " + error
    }
  };

  const getSpecificUser = async (term: string) => {
    try {
      const { data } = await API.get(`users/${term}`)     
      setUserSearched([data])
      setHasNotFound(false)    
      return userSearched
    } catch (error) {
      setHasNotFound(true)    
      return "Error: " + error
    }
  }

  const getRepositories = async ({type, login}: IUser) => {
    const typeRepositories = type === "Organization" ? 'orgs' : 'users'         
    try {
      const { data } = await API.get(`${typeRepositories}/${login}/repos`) 
      setUserRepositories(data)
      setHasNotFound(false)    
      return userRepositories
    } catch (error) {   
      setHasNotFound(true)    
      return "Error: " + error
    }
  }

  const clearSpecificUser = async (term: string) => {    
    if (!!term) return 

    setUserSearched([])
    setHasNotFound(false)
  }

  const value = {
    users: !!userSearched.length ? userSearched : users,
    getUsers,
    getSpecificUser,
    clearSpecificUser,
    getRepositories,
    userRepositories,
    userSearched,
    hasNotFound
  };

  return (
    <UserContext.Provider 
      value={value}>
        {children}
    </UserContext.Provider>
  )
};

export function useUser(): IUserContext {
  return useContext(UserContext);
}
