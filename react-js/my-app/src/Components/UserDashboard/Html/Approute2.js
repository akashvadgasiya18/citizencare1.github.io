import React from 'react'
import { Route, Routes } from "react-router-dom";
import PassChange from '../Html/PassChange';
import Editprofile from './Editprofile';
import UserOrder from './UserOrder';
import Welcomepage from './Welcomepage';

const Approute2 = () => {
  return (
    <div className='PageContent' style={{width:'100%'}}>
       <Routes>
       <Route exact path="/" element={<Welcomepage />} ></Route>
          <Route exact path="/users" element={<Editprofile />} ></Route>
          <Route exact path="/userorders" element={<UserOrder />}></Route>
          <Route exact path="/changePassword" element={<PassChange />}></Route>
        </Routes>
    </div>
  )
}

export default Approute2
