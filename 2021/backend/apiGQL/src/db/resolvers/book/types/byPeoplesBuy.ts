import { IResolvers } from '@graphql-tools/utils';
import { Db } from 'mongodb';
import { IBook } from './../../../interfaces/IBook';
import { IPeople } from './../../../interfaces/IPeople';
import { IResult } from './../../../interfaces/IResult';

const typeByPeoplesBuy: IResolvers = {
    Book: {
        byPeoplesBuy: async ( root: IBook, __, context: {db: Db} ): Promise<IPeople[]> => {
            //extrea de MongoDB todos los peoples
            const dataPeoples = await context.db.collection("people").find().toArray() as IPeople[];
            //se filtra dataPeoples, en cada interacción se examina si en los books de ese people se encuentra el id de nuestro book
            const peopleList = dataPeoples.filter( (people) => people.books.indexOf(root.id) > -1 );
            return peopleList;
        }
    }
}

export default typeByPeoplesBuy;
