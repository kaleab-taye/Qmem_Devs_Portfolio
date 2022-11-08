import { Router, useRouter } from 'next/router';
import NProgress from 'nprogress';
import '../styles/Nprogress.css';

import Layout from '../components/Layout';
import '../styles/globals.css';

import { motion } from 'framer-motion';
import Header from '../components/Header';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      {/* animate on page load */}
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        transition={{ duration: 1 }}
        variants={{
          initial: {
            opacity: 0,
            scale: 1.5,
          },
          animate: {
            opacity: 1,
            scale: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}

export default MyApp;
