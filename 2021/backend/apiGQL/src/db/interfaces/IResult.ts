import { IPeople } from './IPeople';
import { IBook } from "./IBook";

export interface IResult {
    status: boolean;
    message: string;
    data?: DataDB
}

type DataDB =
    | IBook
    | IPeople
    | null
    | undefined ;

