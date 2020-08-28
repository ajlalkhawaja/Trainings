import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';

function Main(props) {
  return (
    <div>
      {/* <h1>{props.name}</h1> */}
      <Header name={props.name} />
      <Banner />
      <Sidebar />
    </div>
  );
}
export default Main;
