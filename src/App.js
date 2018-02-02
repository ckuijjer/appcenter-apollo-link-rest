import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import apolloLogger from 'apollo-link-logger';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import restLink from './restLink';
import AppCenterApps from './AppCenterApps';

const client = new ApolloClient({
  link: ApolloLink.from([apolloLogger, restLink]),
  cache: new InMemoryCache(),
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppCenterApps />
      </ApolloProvider>
    );
  }
}

export default App;
