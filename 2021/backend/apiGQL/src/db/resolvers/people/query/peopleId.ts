import { IPeople } from '../../../interfaces/IPeople';
import { IResult } from '../../../interfaces/IResult';
import { IResolvers } from "@graphql-tools/utils";
import { Db } from 'mongodb';

const queryPeopleResolvers: IResolvers = {
    Query: {
        peopleId: async (_:void, args: {id: string}, context: { db: Db }  ): Promise <IResult> => {
            return await context.db.collection("clientes").findOne({ id: args.id })
                .then ( (peopleDocument) => {
                    return {
                        status: true,
                        message: "Cliente encontrado",
                        data: peopleDocument as IPeople
                      }
                })
                .catch ( (error) => {
                    return {
                        status: false,
                        message: "Cliente no encontrado",
                      }
                })

        } 
    }
}

export default queryPeopleResolvers;