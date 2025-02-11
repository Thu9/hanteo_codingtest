import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './styles/global.scss';
import store from './redux/store.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

async function enableMocking() {
  if (!import.meta.env.DEV) {
    return;
  }
  const { worker } = await import('./mock/browser');
  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}

const queryClient = new QueryClient();

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <App />
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>,
  );
});
