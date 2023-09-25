import Head from 'next/head';
import './globals.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Fragment } from 'react'; 


export const metadata = {
  title: 'SULPHUR | $SULPHUR',
  description: 'The vision to help the SHIB and CAL community in order to burn the $SHIB and $CAL',
  imageUrl:'https://firebasestorage.googleapis.com/v0/b/spac-9eba0.appspot.com/o/sulp.jpeg?alt=media&token=23d63d59-cf17-46f1-8b26-d84932c06e15',
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph metadata */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.imageUrl} /> {/* Add OG image tag */}

        {/* Twitter Card metadata */}
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.imageUrl} /> {/* Add Twitter image tag */}
      </Head>
      
      <body>
        <Navbar/>
        <Fragment>{children}</Fragment>
        <Footer/>
      </body>
     
    </html>
  );
}
