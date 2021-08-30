import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/mouse.png';
import Common from './Common';

 
const Home= () => {
  return (
  <>
 <Common
   name="Grow your bussiness"
   imgsrc={web} 
   visit="/service"
    btname="get started" 
 />
  </>
  );
};

export default Home;