import type { AppProps } from 'next/app';
import withTwindApp from '@twind/next/app';
import twindConfig from '../../twind.config';
import { tw } from 'twind';

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={tw(`w-full h-screen font-mono`)}>
      <nav className={tw(`p-8 pb-0 flex justify-center`)}>
        <h1 className={tw(`text-2xl font-bold`)}>static-lists</h1>
      </nav>

      <Component {...pageProps} />
    </div>
  );
}
export default withTwindApp(twindConfig, App);
