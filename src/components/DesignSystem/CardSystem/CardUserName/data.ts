export interface ICardUserName {   
  avatar_url: string;
  login: string;
  link?: string;
}

export interface ICardUserNameLayout extends ICardUserName { 
  avatar_url: string;
  login: string;
}