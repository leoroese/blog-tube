import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';
// eslint-disable-next-line import/no-cycle
import BookType from '@src/graphql/schema/typedefs/BookType';

const AuthorType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Author',
  description: 'A author',
  // thunk for cyclical horribly documented
  fields: () => ({
    authorId: {
      type: GraphQLNonNull(GraphQLID),
      description: 'id of the author',
    },
    username: {
      type: GraphQLString,
      description: 'authors username',
    },
    books: {
      type: GraphQLList(BookType),
      description: 'list of authors books',
    },
  }),
});

export default AuthorType;
