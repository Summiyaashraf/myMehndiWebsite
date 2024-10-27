"use client"; 

import React from 'react';
import { Navigation }from '../components/Navigation';
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Services } from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Link from 'next/link'; 

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <Features />
      <Contact />
      <Footer />
    </>
  );
}
