import axios from "axios";
import { appContext } from "../../configs/AppContext";

export const API = axios.create({
  baseURL: appContext.api
});

