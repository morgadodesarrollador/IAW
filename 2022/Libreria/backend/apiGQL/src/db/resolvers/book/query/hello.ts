import { IResolvers } from "@graphql-tools/utils";
import { IBook } from '../../../interfaces/IBook';
import { Db } from 'mongodb';

const queryBookResolvers: IResolvers = {
    Query: {
        hello: () => {
           return "Hola Mundo desde GraphQL"
        }
    }
}

export default queryBookResolvers;