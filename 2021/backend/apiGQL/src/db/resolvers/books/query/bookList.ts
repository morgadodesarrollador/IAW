import { IResolvers } from "@graphql-tools/utils";
import { IBook } from '../../../interfaces/IBook';
import { Db } from 'mongodb';

const queryBookResolvers: IResolvers = {
    Query: {
        hello: () => {
           return "Listado de Libros"
        },
        bookList: async(_: void, __:unknown, context: { db: Db }): Promise <Array<IBook>> => { //<IBook[]>
          const books = await context.db.collection("libros").find().toArray() as Array<IBook>;
          console.log(books);
        //  const books = await context.db.collection("libros").find().toArray() as Array<IBook>;
          return books;
        }
    }
}

export default queryBookResolvers;