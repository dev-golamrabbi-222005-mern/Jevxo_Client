import { Outlet } from 'react-router';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';


const Root = () => {

  
    return (
        <div className=''>
            <Navbar />
            <Outlet />
            <Footer/>

    
        
        </div>
    );
};

export default Root;