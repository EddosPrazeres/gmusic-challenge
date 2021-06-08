import * as React from "react";
import { IDetailsLayout } from "../data";
// import './styles.scss'

export default function DetailsView({ title= "DetailsView" }: IDetailsLayout) {
  return (
    <div className="DetailsView">
      {title}
    </div>
  );
}
