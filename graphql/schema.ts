import { schemaComposer } from 'graphql-compose'

// https://graphql-compose.github.io/docs/intro/quick-start.html

const users = [
  { id: '1', name: 'Takashi' },
  { id: '2', name: 'Smith' },
];

const UserTypeComposer = schemaComposer.createObjectTC({
  name: 'User',
  fields: {
    id: 'ID!',
    name: 'String',
  },
});

schemaComposer.Query.addFields({
  users: {
    type: '[User!]!',
    resolve: () => users,
  }
});

export const schema = schemaComposer.buildSchema();
