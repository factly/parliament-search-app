import {
    GraphQLInt,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLFloat,
} from 'graphql';
// import the resolver
import { index, single } from '../resolvers/question';
// import the type
import QuestionType from '../types/question';

export function QuestionIndex() {
    return {
        type: new GraphQLObjectType({
            name: 'QuestionPaging',
            description: '',

            fields: () => ({
                nodes: {
                    type: new GraphQLList(QuestionType),
                    description: 'List of question'
                },
                total: {
                    type: GraphQLInt,
                    description: 'total question'
                }
            })
        }),
        description: 'This will return all the question present in the database',
        args: {
            limit: {
                type: GraphQLInt,
                description: 'limit of paging'
            },
            page: {
                type: GraphQLInt,
                description: 'page no'
            },
            sort: {
                type: GraphQLString,
                description: 'Sorting'
            },
            q: {
                type: GraphQLString,
                description: 'Question Search Word'
            },
            questionHouse: {
                type: new GraphQLList(GraphQLInt),
                description: 'House'
            },
            questionType: {
                type: GraphQLString,
                description: 'Type'
            },
            ministry: {
                type: new GraphQLList(GraphQLInt),
                description: 'Ministry'
            },
            questionBy: {
                type: new GraphQLList(GraphQLInt),
                description: 'Member ID'
            },
            gender: {
                type: new GraphQLList(GraphQLInt),
                description: 'Gender'
            }, 
            ageMin: {
                type: GraphQLFloat,
                description: 'dob max'
            },
            ageMax: {
                type: GraphQLFloat,
                description: 'dob min'
            },
            maritalStatus: {
                type: new GraphQLList(GraphQLInt),
                description: 'merital status'
            },
            sons: {
                type: new GraphQLList(GraphQLInt),
                description: 'sons'
            },
            daughters: {
                type: new GraphQLList(GraphQLInt),
                description: 'daughters'
            },
            education: {
                type: new GraphQLList(GraphQLInt),
                description: 'education'
            },
            profession: {
                type: new GraphQLList(GraphQLString),
                description: 'profession'
            },
            expertise: {
                type: new GraphQLList(GraphQLString),
                description: 'expertise'
            },
            terms: {
                type: GraphQLInt,
                description: 'no of term'
            },
            party: {
                type: new GraphQLList(GraphQLInt),
                description: 'List of party ID'
            },
            constituency: {
                type: new GraphQLList(GraphQLInt),
                description: 'List of constituencies ID'
            },
            state: {
                type: new GraphQLList(GraphQLInt),
                description: 'List of states ID'
            },
            house: {
                type: new GraphQLList(GraphQLInt),
                description: 'List of constituencies ID'
            },
            session: {
                type: new GraphQLList(GraphQLInt),
                description: 'Session'
            }
        },
        resolve(parent, args, context, info) {
            return index(context, args);
        }
    };
}

export function QuestionSingle() {
    return {
        type: QuestionType,
        description: 'This will return question details by ID',
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: 'Question ID'
            }
        },
        resolve(parent, args, context, info) {
            return single(context, args);
        }
    };
}
