import Footer from './Footer';
import Navbar from './Navbar';
import Topbar from './Topbar';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Ethio tender portal</title>
        <meta name="description" content="Best tender portal in Ethiopia" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
          integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>

      <Topbar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
