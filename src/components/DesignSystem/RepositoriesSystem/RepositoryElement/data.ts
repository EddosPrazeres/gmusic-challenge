export interface IRepositoryElement { 
  name: string;
  description: string;
  size: string;
  language: string;
  open_issues: string;
  html_url: string;
}

export interface IRepositoryElementLayout extends IRepositoryElement {

}