import NavBar from './Components/NavBar'
import Head from 'next/head'
import About from "./Components/About";
import Namecard from "./Components/Namecard";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

export default function Home() {
    return (
        <div className="bg-white dark:bg-gray-700 h-full m-0 p-0">
            <Head>
                <title>Daniel Liu</title>
                <meta name="description" content="Personal Website of Daniel J Liu"/>
                <link rel="icon" href="/mantle.webp"/>
            </Head>

            <NavBar/>
            <Namecard/>
            <div id="about"><About/></div>
            <div id="projects">
                <Projects/>
            </div>
            <div id="contact" className={"h-16"}>
                <Contact/>
            </div>
        </div>
    )
}
