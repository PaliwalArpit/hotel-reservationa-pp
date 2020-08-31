import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import Services from "../components/Services"
import {Link} from "react-router-dom"
export default function home() {
    return (
        <>
       <Hero>
           <Banner title="luxurious rooms" subtitle="Delux rooms strating at 2999 Rs">
           <Link to="/rooms" className="btn-primary">Our rooms</Link>
           </Banner>
       </Hero>
       <Services/>
        </>
    )
}
