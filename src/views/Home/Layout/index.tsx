import * as React from "react";
import { IHomeLayout } from "../data";
// import './styles.scss'

export default function HomeView({ title= "HomeView" }: IHomeLayout) {
  return (
    <div className="HomeView">
      {title}
    </div>
  );
}
