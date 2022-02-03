import { IPeople } from './../../../interfaces/IPeople';
import { IResolvers } from "@graphql-tools/utils";
import { IBook } from '../../../interfaces/IBook';

import { Db } from 'mongodb';

const typeLibrosPeopleResolvers : IResolvers = {
    People: {
        libros: async(root:IPeople, __ , context: {db:Db} ): Promise<IBook[]> => {
            let libros: IBook[]=[];

            for (let idlibro of root.books){
                let dblibro = await context.db.collection("book").findOne({id: idlibro })
                    .then (data => {
                        return data as IBook;
                    })
                libros.push(dblibro as IBook);
            }

            return libros;
        }
    }
}

export default typeLibrosPeopleResolvers ;