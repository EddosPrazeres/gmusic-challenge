import * as React from 'react';
import { useUser } from '../../../../hooks';
import { ICardDetails, IupdateProfileJSON } from './data';
import { CardDetails as Layout } from './Layout';

export default function CardDetails(props: ICardDetails){
  const { title } = props
  const { userRepositories } = useUser()

  const returnCurrentJSON = () => title ? updateGitJSON() : updateProfileJSON(props) 

  const SumRepositories = () => {
    let result = userRepositories.reduce((acc: any, curr: any) => {
      acc = {
        size: acc.size + curr.size,
        language: `${curr.language}, ${acc.language}`,
        open_issues: acc.open_issues + curr.open_issues            
      }
      
      return acc
    }, {size: 0, language: "", open_issues: 0});
    
    return result
  }

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
        value: `${SumRepositories().size} bytes`,
      },
      {
        title: "Linguagens",
        value: `${SumRepositories().language}`,
      },
      {
        title: "Issues abertos",
        value: `${SumRepositories().open_issues}`,
      }
    ]
  )

  return (
    <Layout {...props} details={returnCurrentJSON()}/>
  )
}

  