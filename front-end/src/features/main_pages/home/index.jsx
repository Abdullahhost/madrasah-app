


import Banner from '../../container/header/banner'

import About from '../../pages_omponent/about'
import Features from '../../pages_omponent/features'
import CountDown from '../../pages_omponent/counter'
import MailPages from '../../pages_omponent/mail'
import CustomMaps from '../../pages_omponent/maps'
import AppBar from '../../container/header/appBar'
import Footer from '../../container/footer'


const Home = () => {
    return (
        <div>
            <AppBar />
            <Banner />
            <About />
            <CountDown />
            <Features />
            <CustomMaps />
            <MailPages />
            <Footer />
        </div>
    )
}

export default Home;
