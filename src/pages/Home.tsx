import React from 'react'
import { Link } from 'react-router-dom'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'


export const Home = () => {
  return (
    <>
      <Hero />
      <Content />
    </>
  )
}
