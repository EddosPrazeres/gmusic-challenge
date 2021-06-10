export interface IText { 
  title?: string;
  size?: IFontSize;
  font?: IFont
}

export interface ITextLayout extends IText {  
  
}

export type IFont = "normal" | "lighter" | "bold" | "bolder";

export type IFontSize =
  | "tiny"
  | "xsmall"
  | "smaller"
  | "small"
  | "default"
  | "medium"
  | "big"
  | "large"
  | "larger"
  | "xlarge";