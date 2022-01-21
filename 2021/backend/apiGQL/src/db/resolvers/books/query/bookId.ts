import { IResult } from './../../../interfaces/IResult';
import { IResolvers } from "@graphql-tools/utils";
import { IBook } from '../../../interfaces/IBook';

import { Db } from 'mongodb';

const queryBookResolvers: IResolvers = {
    Query: {
        bookId: async(_: void, args: {id: string}, context: { db: Db }): Promise <IResult> => {
          return await context.db.collection("libros").findOne( {id: args.id} )
            .then( (bookDocument) => {
              console.log(bookDocument);
              return {
                status: true,
                message: "Libro encontrado",
                data: bookDocument as IBook
              }
            })
            .catch( (error) => {
              console.log (error);
              return {
                status: false,
                message: "Libro no encontrado",
              }
            })
        }
    }
}

export default queryBookResolvers;