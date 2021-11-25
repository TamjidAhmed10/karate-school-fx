import Footer from "../Components/Footer"
import HistoryComp from "../Components/HistoryComp"
import Instructors from "../Components/Instructors"
import Navbar from "../Components/Navbar"

const History = () => {
    return (
        <div>
            <Navbar />
            <Instructors writings="History" />
            <HistoryComp />
            <Footer/>
        </div>
    )
}

export default History
