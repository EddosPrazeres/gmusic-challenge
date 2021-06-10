export interface ICardDetails {
  title?: string 
  user?: any;
  props?: any
}

export interface ICardDetailsLayout extends ICardDetails { 
  details: IArrayDetails,
  title?: string
  user?: any
}


interface IArrayDetails extends Array<IDetails>{}

interface IDetails {
  title: string;
  value: string;
  props?: any;
}

export interface IupdateProfileJSON extends ICardDetails{
  name?: string;
  bio?: string;
  location?: string;
}