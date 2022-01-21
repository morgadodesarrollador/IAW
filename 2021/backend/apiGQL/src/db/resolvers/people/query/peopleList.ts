import { IPeople } from './../../../interfaces/IPeople';
import { IResolvers } from '@graphql-tools/utils';
import { Db } from 'mongodb';

const queryPeopleResolvers: IResolvers = {
    Query: {
        peopleList: async (_:void, __unknown, context: {db: Db}): Promise<IPeople[]> => {
            const peoples = await context.db.collection("clientes").find().toArray() as IPeople[];
            return peoples;
        }
    }
}

export default queryPeopleResolvers;