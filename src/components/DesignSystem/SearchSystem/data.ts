export interface ISearchSystem {   
  title?: string;
  titleButton: string;  
}

export interface ISearchSystemLayout extends ISearchSystem {  
  value: string | ReadonlyArray<string> | number;
  onChange: (e: any) => void;
  onSubmit: (e: any) => void;
}

type tplotOptions = {
  [key: string]: string
}

export const FontSize: tplotOptions = {
  tiny: '10px',
  small: '13px',  
  medium: '16px',
  large: "18px"
}
