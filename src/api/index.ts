import axios from "axios";
import {Result} from "../types";


export const postEstimations = async (body: Result) => axios.post<Result, {status: "OK" | "ERROR" } >('www.mock-api.com/estimations', body )
