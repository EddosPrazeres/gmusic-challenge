import { pointingTo } from "../../package.json";
import { StringMap } from "../utils";

interface IAppContext {
  api: string;
}

const defineContext = (pointingTo: string): IAppContext => {
  const api: StringMap = {
    dev: "https://api.github.com"
  };

  return {
    api: api[pointingTo],
  };
};

export const appContext = defineContext(pointingTo);
