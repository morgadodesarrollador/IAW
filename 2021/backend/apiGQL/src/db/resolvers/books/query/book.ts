import { IResolvers } from "@graphql-tools/utils";

const queryBookResolvers: IResolvers = {
    Query: {
        books: () => {
           return "Listado de Libros"
        }
    }
}

export default queryBookResolvers;