import { GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';

const CreateBookInput = new GraphQLInputObjectType({
  name: 'CreateBookInput',
  description: 'Create book input',
  fields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'An arbitrary integer.',
    },
    authorId: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'An arbitrary integer.',
    },
  },
});

export default CreateBookInput;
