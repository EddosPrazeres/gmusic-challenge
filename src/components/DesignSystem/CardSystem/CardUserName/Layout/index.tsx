import * as React from "react";
import { CardWrapper, Text } from "../../../../../components";
import { ICardUserNameLayout } from "../data";
import './styles.scss'

export function CardUserName({ avatar_url, login, link}: ICardUserNameLayout) {
  const id = login;
  return (
    <CardWrapper {...link && {link: `${link}/${id}`}}> 
        <div className="CardUserName">
          <img className="CardUserName-avatar" src={avatar_url}/>
          <Text title={login} size="large" />          
        </div>
    </CardWrapper>
  )
}