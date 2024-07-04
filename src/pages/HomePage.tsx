import Header from "../components/Header";
import About from "../components/About";
import Portifolio from "../components/Portifolio";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Contact from "../components/Contact";

export default function HomePage() {
    return (
        <>
            <Header/>
            <Home />
            <About />
            <Portifolio />
            <Contact />
            <Footer />
        </>
    );
}
