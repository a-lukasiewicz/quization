import Header from 'components/Header/Header';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <div>
      <div className="alert alert-success">
        <div className="flex-1" />
      </div>
      <h1>Quization</h1>
    </div>
  </>
);

export default Home;
