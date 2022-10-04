import type { NextPage } from 'next';
import { tw } from 'twind';
import { LISTS } from '../lists';
import List from '../components/List';
import slugify from 'slugify';

const Home: NextPage = () => {
  return (
    <main
      className={tw(
        `flex flex-col space-y-16 justify-center items-center py-8`
      )}
    >
      {LISTS.map((list) => (
        <List key={slugify(list.name)} {...list} />
      ))}
    </main>
  );
};

export default Home;
