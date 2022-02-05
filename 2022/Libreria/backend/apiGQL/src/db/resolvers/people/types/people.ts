import { IPeople } from '../../../interfaces/IPeople';
import { IResolvers } from "@graphql-tools/utils";

const typesPeopleResolvers: IResolvers = {
    People :{
        github: (root: IPeople) => {
            return root.github === undefined
            ? "NO TIENES NPI"
            : `https://github.com/${root.github}`;
        },
        website: (root: { website: string }) => {
            return root.website === undefined ? "" : `http://www.${root.website}`;
        },
        twitter: (root: { twitter: string }) => {
            return root.twitter === undefined
              ? ""
              : `https://twitter.com/${root.twitter}`;
        },
    }
    
}

export default typesPeopleResolvers ;