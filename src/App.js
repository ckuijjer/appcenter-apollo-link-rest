import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { RestLink } from 'apollo-link-rest';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import AppCenterApps from './AppCenterApps';

const restLink = new RestLink({
  uri: 'https://apps.exactonline.com/nl/nl-NL/V2',
  headers: {
    "X-Requested-With": "XMLHttpRequest" // the api will return a http status code 500 internal server error without this header
  },
});

const client = new ApolloClient({
  link: restLink,
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
