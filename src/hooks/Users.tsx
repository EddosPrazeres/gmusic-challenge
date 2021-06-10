import React from "react";

import { StringMap } from "../utils/globalInterfaces";
import axios from "axios";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
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
      return userSearched
    } catch (error) {
      return "Error: " + error
    }
  }

  const getRepositories = async ({type, login}: IUser) => {
    const typeRepositories = type === "Organization" ? 'orgs' : 'users'         
    try {
      const { data } = await API.get(`${typeRepositories}/${login}/repos`) 
      setUserRepositories(data)
      return userRepositories
    } catch (error) {       
      return "Error: " + error
    }
  }

  const clearSpecificUser = async (term: string) => {    
    if (!!term) return 

    setUserSearched([])
  }

  const value = {
    users: !!userSearched.length ? userSearched : users,
    getUsers,
    getSpecificUser,
    clearSpecificUser,
    getRepositories,
    userRepositories,
    userSearched,
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
