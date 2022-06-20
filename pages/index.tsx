import Head from 'next/head'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client'
import { UsersNameDocument } from '../graphql/dist/generated-client';

const client = new ApolloClient({
  uri: 'http://localhost:3450/api/users',
  cache: new InMemoryCache(),
});

function Users() {
  const { data } = useQuery(UsersNameDocument);
  console.log(data);
  
  return (
    <ul>
      {data?.users.map((user) => <li>{user.name}</li>)}
    </ul>
  );
}

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Users />
      </div>
    </ApolloProvider>
  )
}
