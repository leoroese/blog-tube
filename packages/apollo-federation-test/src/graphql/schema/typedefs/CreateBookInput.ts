import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

const CreateBookInput = new GraphQLInputObjectType({
  name: 'CreateBookInput',
  description: 'Create book input',
  fields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'An arbitrary integer.',
    },
    author: {
      type: new GraphQLNonNull(GraphQLObjectType()),
      description: 'An arbitrary integer.',
    },
  },
});

export default CreateBookInput;
