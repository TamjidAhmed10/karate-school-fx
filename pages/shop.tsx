import Footer from "../Components/Footer"
import Instructors from "../Components/Instructors"
import Navbar from "../Components/Navbar"
import Shop from "../Components/Shop"
const ShopP = () => {
    return (
        <div>
            <Navbar />
            <Instructors writings="Shop" />
            <Shop />
            <Footer/>
        </div>
    )
}

export default ShopP
