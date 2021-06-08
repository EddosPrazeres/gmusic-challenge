import * as React from "react";
import { ITextLayout } from "../data";
export const Text: React.FC<ITextLayout> = ({  
  ...props
}) => (
  <span  {...props} />
);
