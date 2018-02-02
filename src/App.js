import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import apolloLogger from 'apollo-link-logger';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import restLink from './restLink';
import AppCenterApps from './AppCenterApps';
import AppCenterAppDetails from './AppCenterAppDetails';

const client = new ApolloClient({
  link: ApolloLink.from([apolloLogger, restLink]),
  cache: new InMemoryCache(),
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Switch>
            <Route path="/:partnerName/:applicationName" component={AppCenterAppDetails} />
            <Route path="/" component={AppCenterApps} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
