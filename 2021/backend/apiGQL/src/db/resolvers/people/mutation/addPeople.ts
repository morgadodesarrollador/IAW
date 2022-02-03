import { IResolvers } from '@graphql-tools/utils';
import { IResult } from '../../../interfaces/IResult';
import { IPeople } from '../../../interfaces/IPeople';
import { Db } from 'mongodb';

const mutationAddPeopleResolvers: IResolvers = {
    Mutation: {
        addPeople: async(_:void, args: { people: IPeople}, context: { db: Db } ): Promise <IResult> => {
            const dataPeople = await context.db.collection("people").insertOne(args.people)
                .then( (data) => {
                    return {
                        status: true,
                        message: "people insertado con éxito",
                        data: args.people
                    }
                }).catch( (error) => {
                    return {
                        status: false,
                        message: `Error: ${error}`,
                        data: null
                    }
                });
            return dataPeople;
        }
    }
}

export default mutationAddPeopleResolvers;