import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

/* This component defines the layout of the application. 
 * It simply accepts children as props and render them 
 * to the DOM together or without other child components. 
*/

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <main>
          {
            children
          }
        </main>
      <Footer />
    </>
  );
}

export default Layout;