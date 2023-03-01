import { useMediaQuery } from '@mui/material'
import React from 'react'
import Anouncement from '../components/Anouncement'
import Bestsellers from '../components/Bestsellers'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)")


  return (
    <div>
        <Anouncement />
        <Navbar />
        { isNonMobileScreen && <Slider />}
        <Bestsellers />
        <Categories />
        <Products />
        <Footer />
    </div>
  )
}

export default Home 