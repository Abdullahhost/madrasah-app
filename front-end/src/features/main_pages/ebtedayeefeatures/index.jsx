import Footer from "../../container/footer"
import AppBar from "../../container/header/appBar"
import SubMenu from "../../container/header/submenu"
import Ebtedayee_Features from "../../pages_omponent/ebtedayeefeatures"


const Ebtedayee_Features_page = () => {
    return (
        <div>

            <AppBar />
            <SubMenu dataprops='Features' />
            <Ebtedayee_Features />
            <Footer />

        </div>
    )
}

export default Ebtedayee_Features_page
