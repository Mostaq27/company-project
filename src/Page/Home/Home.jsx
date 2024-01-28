import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
           <Banner/>
           <About/>
           <Blog/>
           <Contact/>
        </div>
    );
};

export default Home;