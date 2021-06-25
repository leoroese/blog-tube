import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const CreateAuthorInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateAuthorInput',
  description: 'Create author input',
  fields: {
    username: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The authors username',
    },
  },
});

export default CreateAuthorInput;
