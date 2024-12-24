import React from 'react';
import Herobanner from '../components/home/Herobanner';
import Navbar from '../components/Navbar';
import Banner from '../components/home/Banner';
import Products from '../components/home/Products';
import Instagram from '../components/home/Instagram';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Herobanner />
      <Banner />
      <Products/>
      <Instagram/>
      <Footer/>
    </>
  );
}
