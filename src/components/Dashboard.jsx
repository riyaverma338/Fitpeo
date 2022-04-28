import React from 'react';
import Sidenav from "./Sidenav";
import Navbar from './Navbar';
import "../css/Dashboard.css";
import PageCard from "./PageCard";
import Stats from './Stats';
import {ChartContent} from './ChartContent';

export default function Dashboard() {
  return (
    <>
   <Navbar/>
   <Sidenav/>
   <section className='dashboard'>
        <PageCard/>
        <Stats/>
        <ChartContent/>
    </section>
    </>
  )
}
