import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import App from './app';
import { client } from './apollo';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ApolloProvider } from '@apollo/client';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
         <HelmetProvider>
            <ReactQueryDevtools initialIsOpen={true} />
            <App />
            <ToastContainer />
         </HelmetProvider>
      </QueryClientProvider>
      ,
   </ApolloProvider>,
);
