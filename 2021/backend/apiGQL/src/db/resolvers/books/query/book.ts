import { IResolvers } from "@graphql-tools/utils";

const queryBookResolvers: IResolvers = {
    Query: {
        hello: () => {
           return "Listado de Libros"
        }
    }
}

export default queryBookResolvers;