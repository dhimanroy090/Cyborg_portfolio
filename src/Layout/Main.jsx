import App from '../App';
import Blog from '../Components/Blog/Blog';
import Approach from '../Components/Home/Approach';
import Banner from '../Components/Home/Banner';
import Content from '../Components/Home/Content';
import Footer from '../Components/Home/Footer';
import Feature from '../Components/Home/feature';
import Navbar from '../Components/Navbar';

const Main = () => {
    return (
        <div>
            <App></App>
            <Navbar></Navbar>
            <Banner></Banner>
            <Feature></Feature>
            <Content></Content>
            <Approach></Approach>
            <Footer></Footer>
            <Blog></Blog>
        </div>
    );
};

export default Main;