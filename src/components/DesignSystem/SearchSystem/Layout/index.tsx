import * as React from "react";
import { Text } from "../../../../components";
import { ISearchSystemLayout } from "../data";
import './styles.scss'

export function SearchSystem({ 
  value,
  title,
  titleButton,
  onSubmit,
  onChange,
  ...props 
}: ISearchSystemLayout) {

  return (
    <form className="SearchSystem" onSubmit={onSubmit}>
      {title && <Text title={title} size="large"/> }
        <div className="SearchSystem-content"> 
          <input type="text" value={value} onChange={onChange} />      
          <input type="submit" value={titleButton} />
        </div>
    </form>
  )
}
