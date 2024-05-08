import {Outlet} from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/footer/Footer.jsx/Footer'
const Layout=()=>{
    return(
       <>
       <Header/>
       <div className='h-screen w-full border-b-1 border-t-2'>
       <Outlet/>
       </div>
       <Footer/>
       </>
    )
    }
    export default Layout