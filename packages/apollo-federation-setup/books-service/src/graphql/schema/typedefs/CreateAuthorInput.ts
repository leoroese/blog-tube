import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

const CreateAuthorInput = new GraphQLInputObjectType({
  name: 'CreateAuthorInput',
  description: 'Create book input',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Authors name.',
    },
  },
});

export default CreateAuthorInput;
