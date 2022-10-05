import type { AppProps } from 'next/app';
import withTwindApp from '@twind/next/app';
import twindConfig from '../../twind.config';
import { tw } from 'twind';
import { useState } from 'react';

function App({ Component, pageProps }: AppProps) {
  // TODO: implement style in list examples
  const [style, setStyle] = useState<'upper' | 'lower' | 'title'>('lower');

  return (
    <div className={tw(`w-full h-screen font-mono`)}>
      <nav
        className={tw(
          `p-8 pb-0 flex flex-col justify-center items-center space-y-4`
        )}
      >
        <h1 className={tw(`text-2xl font-bold`)}>static-lists</h1>

        <ul className={tw(`flex space-x-2 justify-center`)}>
          <li>
            <button
              className={tw(
                `focus:outline-none px-4 py-2`,
                style === 'upper' && tw`bg-black text-white`
              )}
              onClick={() => setStyle('upper')}
            >
              UPPERCASE
            </button>
          </li>

          <li>
            <button
              className={tw(
                `focus:outline-none px-4 py-2`,
                style === 'lower' && tw`bg-black text-white`
              )}
              onClick={() => setStyle('lower')}
            >
              lowercase
            </button>
          </li>

          <li>
            <button
              className={tw(
                `focus:outline-none px-4 py-2`,
                style === 'title' && tw`bg-black text-white`
              )}
              onClick={() => setStyle('title')}
            >
              TitleCase
            </button>
          </li>
        </ul>
      </nav>

      <Component {...pageProps} />
    </div>
  );
}
export default withTwindApp(twindConfig, App);
