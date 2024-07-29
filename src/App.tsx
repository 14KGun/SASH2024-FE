import { GlobalStyleProvider, SWRProvider } from '@/components/Root';

export default () => (
  <>
    <GlobalStyleProvider />
    <SWRProvider></SWRProvider>
  </>
);
