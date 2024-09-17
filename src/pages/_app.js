import '@/styles/globals.css'
import '@/styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-svg-core/styles.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'swiper/css';
import 'swiper/css/pagination';
import Loader from '@/components/common/loader/loader';
import ScrollToTop from '../components/common/scrollToTop';


export default function App({ Component, pageProps }) {
  return (
  <>
     <ScrollToTop></ScrollToTop>
     

      <main>
      <Component {...pageProps} />
      </main>
  </>)

}
