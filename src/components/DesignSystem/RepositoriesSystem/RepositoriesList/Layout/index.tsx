import * as React from "react";
import { IRepositoriesListLayout } from "../data";
import './styles.scss'
import { CardWrapper, ListWrapper, RepositoryElement } from '../../../../../components'

export function RepositoriesList({ ListElements }: IRepositoriesListLayout) {
  return (
    <CardWrapper>
      <ListWrapper 
        ListElements={ListElements}
        ItemComponent={RepositoryElement}
      />
    </CardWrapper>
  )
}