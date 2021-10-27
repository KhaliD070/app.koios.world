import React from 'react';
import { MainNav } from './MainNav/MainNav';


export const Layout: React.FC = (props) => {
  return (
    <>
      <MainNav />
      <main className="main-side-nav">
        {props.children}
        
      </main>

      rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossorigin="anonymous"
    </>
  );
};