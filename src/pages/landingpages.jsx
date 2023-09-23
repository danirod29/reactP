import React from "react"
import Navbar from "../components/landing/navbar"
import Footer from "../components/landing/footer"
import Landingcontent from "../components/landing/landingcontent"
import SideBar from "../components/landing/sidebar"
import SecondaryNavBar from "../components/landing/secondarynavbar"
import FooterFirst from "../components/landing/footerFirst"
import Cards from "../components/landing/cards"


const Landingpage = () =>{
    const nombrePagina = "pagina"
    return <div data-theme = "mytheme">
        <Navbar nombre = {nombrePagina}/>
        <SecondaryNavBar />
        <div className="Parent">
            <div className="Child1" >
            <SideBar />
            </div>
            <div className="Child2">
            <Landingcontent />
            <Cards />
            </div>
        </div>
        <FooterFirst />
        <Footer/>
    </div>
}

export default Landingpage

