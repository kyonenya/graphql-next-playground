import { ApolloServer } from 'apollo-server-micro';
import { readFileSync } from 'fs';
import { NextApiHandler } from 'next';
import { join } from 'path';
import { Resolvers } from '../../graphql/dist/generated-server';
import { schema } from '../../graphql/schema';

//const typeDefs = readFileSync(join(process.cwd(), "graphql", "schema.graphql")).toString("utf-8");

// リゾルバー：実際のデータを返す
//const resolvers: Resolvers = { // 自動生成された`Resolvers`で型推論が効く
//  Query: {
//    users: () => [
//      { id: '1', name: 'Takashi' },
//      { id: '2', name: 'Smith' },
//    ]
//  }
//};

//const apolloServer = new ApolloServer({ typeDefs, resolvers });
const apolloServer = new ApolloServer({ schema });

const handler: NextApiHandler = async (req, res) => {
  await apolloServer.start();
  await apolloServer.createHandler({ path: '/api/users' })(req, res);
}

export const config = {
  api: { bodyParser: false },
};

export default handler;
