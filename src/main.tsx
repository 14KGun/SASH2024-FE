import { router } from '@/routes';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { GlobalStyleProvider, SWRProvider } from '@/components/Root';

const App = () => (
  <>
    <GlobalStyleProvider />
    <SWRProvider>
      <RouterProvider router={router} />
    </SWRProvider>
  </>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
