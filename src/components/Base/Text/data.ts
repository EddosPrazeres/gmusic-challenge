export interface IText { 
  title?: string;
}

export interface ITextLayout extends IText {  
  fontSize?: string;
}


export enum FontSize {
  tiny = '10px',
  small = '13px',  
  medium = '16px',
  large = "18px"
}