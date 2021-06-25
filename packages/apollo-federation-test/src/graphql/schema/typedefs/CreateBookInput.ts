import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

const CreateBookInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateBookInput',
  description: 'Create book input',
  fields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The books title.',
    },
    authorId: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The authors id.',
    },
  },
});

export default CreateBookInput;
