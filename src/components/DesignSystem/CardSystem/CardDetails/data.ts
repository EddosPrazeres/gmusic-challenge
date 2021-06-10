export interface ICardDetails {
  title?: string 
}

export interface ICardDetailsLayout extends ICardDetails { 
  details: IArrayDetails,
  title?: string
}


interface IArrayDetails extends Array<IDetails>{}

interface IDetails {
  title: string;
  value: string;
}

export interface IupdateProfileJSON {
  name?: string;
  bio?: string;
  location?: string;
}