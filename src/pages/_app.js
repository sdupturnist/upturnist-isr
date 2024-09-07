// pages/_app.js
import NoInternetConnection from "@/components/NoConnection";
import "../../public/styles/globals.min.css";
//import "../../public/styles/tempstyle.css";
import CusrsorAnimation from "@/components/CusrsorAnimation";
import { ModalContextProvider } from "@/context/modalContext";
import { ThemeProvider } from "@/context/themeContext";
import { GoogleTagManager } from '@next/third-parties/google';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleTagManager gtmId="GTM-PGFRFK3X" /> {/* Add this line */}
      <NoInternetConnection>
        <ThemeProvider>
          <ModalContextProvider>
            <CusrsorAnimation />
            <Component {...pageProps} />
          </ModalContextProvider>
        </ThemeProvider>
      </NoInternetConnection>
    </>
  );
}
