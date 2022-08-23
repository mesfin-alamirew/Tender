import Footer from "./Footer"
import Navbar from "./Navbar"
import Topbar from "./Topbar"

const Layout = ({children}) => {
    return (
        <>
            <Topbar /> 
            <Navbar />          
            {children}
            <Footer />
        </>
    )
}

export default Layout
