import React from 'react'
import Main from '../Components/Main';
import About from '../Components/About';
import Contact from '../Components/Contact'
import Banner from '../Components/Banner'

export default function Home(){
    const serv = [
        {
            id:1,
            src:"plant2.webp",
            name:"Outdoor Plants"
        },
        {
            id:2,
            src:"IndoorPlants.jpg",
            name:"Indoor Plants"
        },
        {
            id:3,
            src:"Pots.webp",
            name:"Pots"
        },
        {
            id:4,
            src:"q4.webp",
            name:"Tools and Accessories"
        }
    ]
    return(
        <>
            <Main/>
            <Banner title="Services" data={serv}/>
            <About/>
            <Contact/>
        </>
    )
}