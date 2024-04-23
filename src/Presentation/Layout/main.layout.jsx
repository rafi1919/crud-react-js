
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar'

const MainLayout= () => {

  return (
    <>
      <Navbar />
      <main className="flex w-full flex-col">
        <div className="mx-auto w-full">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
