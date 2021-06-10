import * as React from "react";
import { CardWrapper, Text } from "../../../../../components";
import { ICardUserNameLayout } from "../data";
import './styles.scss'

export function CardUserName({ avatar_url, login, link}: ICardUserNameLayout) {
  return (
    <CardWrapper link={link}> 
        <div className="CardUserName">
          <img className="CardUserName-avatar" src={avatar_url}/>
          <Text title={login} size="large" />          
        </div>
    </CardWrapper>
  )
}