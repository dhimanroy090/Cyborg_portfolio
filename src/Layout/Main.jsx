import { Outlet } from 'react-router-dom';

// import Blog from '../Components/Blog/Blog';

import Footer from '../Components/Home/Footer';

import Navbar from '../Components/Navbar';
const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
            <Footer></Footer>
            {/* <Blog></Blog> */}
        </div>
    );
};

export default Main;
