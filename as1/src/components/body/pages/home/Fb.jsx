import React from 'react';
// import { FacebookProvider, Like, Page } from 'react-facebook';
import ReactFBLike from 'react-fb-like';

const fbButton = () => {
    return (
        // <FacebookProvider appId="2665385113543176">
        //   {/* <Like href="https://www.facebook.com/choinkipomorze" colorScheme="light" showFaces share /> */}
        //   <Page href="https://www.facebook.com/choinkipomorze" tabs="timeline" />
        // </FacebookProvider>
        <ReactFBLike 
          language="pl_PL" 
          appId="2665385113543176" 
          version="v2.12" 
          layout="button_count"
          size="large"
          href="https://www.facebook.com/choinkipomorze"
        />
      );
}


export default fbButton;