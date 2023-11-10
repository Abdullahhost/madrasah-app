

import Footer from "../../container/footer"
import AppBar from "../../container/header/appBar"
import SubMenu from "../../container/header/submenu"
import Dakhil_Features from "../../pages_omponent/dakhilfeatures"


const Dakhil_Features_Page = () => {
    return (
        <div>
            <AppBar />
            <SubMenu dataprops='Features' />
            <Dakhil_Features />
            <Footer />

        </div>
    )
}

export default Dakhil_Features_Page
