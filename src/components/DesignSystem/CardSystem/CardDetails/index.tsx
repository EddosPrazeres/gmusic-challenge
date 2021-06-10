import * as React from 'react';
import { ICardDetails, IupdateProfileJSON } from './data';
import { CardDetails as Layout } from './Layout';

export default function CardDetails(props: ICardDetails){
  const { title } = props

  const returnCurrentJSON = () => title ? updateGitJSON() : updateProfileJSON({}) 

  const updateProfileJSON = ({name, bio, location}: IupdateProfileJSON) => (
    [
      {
        title: "Name",
        value: name || "Não informado",
      },
      {
        title: "Bio",
        value: bio || "Não informado"
      },
      {
        title: "Localidade",
        value: location || "Não informado",
      }
    ]
  )

  const updateGitJSON = () => (
    [
      {
        title: "Tamanho total",
        value: "123456 bytes",
      },
      {
        title: "Linguagens",
        value: "C# (1), Java(2), Python(3)",
      },
      {
        title: "Issues abertos",
        value: "1234",
      }
    ]
  )

  return (
    <Layout {...props} details={returnCurrentJSON()}/>
  )
}

  