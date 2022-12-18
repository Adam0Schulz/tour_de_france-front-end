import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient} >
    <Router>
      <App />
    </Router>
  </QueryClientProvider>
);

