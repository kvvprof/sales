import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import ReactDOM from 'react-dom/client';

import '@/app/index.css';
import { AppRouter } from '@/router/app-router';

const client = new ApolloClient({
  link: createHttpLink({
    uri: `${import.meta.env.VITE_SALES_GUARD_URL}/sales-gateway`,
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <AppRouter />
  </ApolloProvider>,
);
