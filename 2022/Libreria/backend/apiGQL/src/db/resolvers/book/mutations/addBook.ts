import { IResult } from '../../../interfaces/IResult';
import { IResolvers } from "@graphql-tools/utils";
import { IBook } from '../../../interfaces/IBook';

import { Db } from 'mongodb';

const mutationAddBookResolvers: IResolvers = {
    Mutation: {
        addBook: async(_: void, args: {book: IBook}, context: { db: Db }): Promise <IResult> => {
            const dataResult = await context.db.collection("book").insertOne(args.book)
                .then( (data) => {
                    console.log(data);
                    return {
                        status: true,
                        message: "usuario insertado con éxito",
                        data: args.book
                    }
                }).catch ( (error) => {
                    return { 
                        status: false,
                        message: `Error: ${error}`
                    }
                })
            return dataResult;
        }
        
    }


}

export default mutationAddBookResolvers;
