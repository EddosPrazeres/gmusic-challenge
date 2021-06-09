import * as React from "react";
import { Text } from "../../../components";
import { IHomeLayout } from "../data";
import './styles.scss'

export default function HomeView({ title= "HomeView" }: IHomeLayout) {
  return (
    <div className="HomeView">
        <Text title="HomeView"/>
      {title}
    </div>
  );
}
