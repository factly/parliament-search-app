import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLList } from 'graphql';

export default new GraphQLObjectType({
    name: 'constituency',
    description: 'All constituency of india.',

    fields: () => ({
        CID: {
            type: GraphQLID,
            description: 'Internal constituency ID'
        },
        name: {
            type: GraphQLString,
            description: 'Constituency name'
        },
        state: {
            type: GraphQLString,
            description: 'Constituency state'
        },
        pincodes: {
            type:new GraphQLList(GraphQLInt),
            description: 'Constituency pincodes'
        },
        from: {
            type: GraphQLString,
            description: 'Constituency adding date'
        },
        to: {
            type: GraphQLString,
            description: 'Constituency delimitation date'
        }
    })
});