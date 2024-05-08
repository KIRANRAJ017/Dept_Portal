import Slider from "../components/Home/Slider";
import Navbar from "./Navbar";
import Items from "./Home/Items";
import About from "../components/Home/About"
import Placement from "../components/Home/Placement"
import Companies from "../components/Home/companies"
import Footer from "../components/Home/Footer"

function Home()
{
    return(
        <>
            <div>
                <Navbar/>
                <Slider/>
                <Items/>
                <About/>
                <Placement/>
                <Companies/>
                <Footer/>
            </div>
        </>
    )
}

export default Home;