import React from 'react'
import MainHeader from '../layout/MainHeader'
import HotelService from '../common/HotelService'

const Home = () => {
    return (
        <section>
            <MainHeader />
            <section className="container"></section>
            <Parallax />
            <HotelService />
            <Parallax />
        </section>
    )
}

export default Home