import * as React from "react";
import { CardWrapper, CardElement, Text, ListWrapper} from "../../../../../components";
import { ICardDetailsLayout } from "../data";
import './styles.scss'

export function CardDetails({ details, title }: ICardDetailsLayout) {  
  return (
    <CardWrapper>      
      {title && <Text title={title} font="bolder"/>}
      <ListWrapper 
        ListElements={details}
        ItemComponent={CardElement}
      />
    </CardWrapper>      
  )
}