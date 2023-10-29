
import { Facebook, LinkedIn, Twitter } from '@mui/icons-material'
import './index.css'

import footerLogo from '../../../../public/images/logo.png'

const Footer = () => {
    return (
        <>
            <div>

                <section className="footer_section">
                    <div className="footer_left_section">
                        <div className="footer_left_top">
                            <h3>History of Shahdharipara Mmdrashah</h3>
                            <p>What sets Shahdharipara K.A.S Alim Madrashah, apart is our unwavering commitment to academic rigor and holistic development. We blend a rich academic curriculum with hands-on experiences, cutting-edge research opportunities, and a wide range of extracurricular activities. This multidimensional approach ensures that our graduates are not only well-prepared academically but also possess the adaptability and creativity to excel in various domains.</p>
                
                        </div>

                        <div className="footer_left_bottom">
                            <img className='logo_image' src={footerLogo} alt="images" />
                            <h6 className='logo_text'>Shahdharipara K.A.S Alim madrashah </h6>
                        </div>
                    </div>
                    <div className="footer_right_section">
                        <div className="footer_right_top">
                            <div className='telephone_section'>
                                <small>Conttuct us</small>
                                <li> <a href="tel:+8801759100701">01759100701</a></li>
                                <li> <a href="tel:+8801759100701">01759100706</a></li>
                                <li> <a href="tel:+8801759100701">01759100705</a></li>
                                <li> <a href="tel:+8801759100701">01759100704</a></li>
                            </div>
                        </div>

                        <div className="footer_right_bottom">
                            <div>

                                <div className='addressSection'>
                                    <h4>Shahdharipara K.A.S Alim Madrashah</h4>
                                    <address>Shahdharipara, Delduar, Tangail</address>
                                    <a href="mailto:abdullahgoodboy@gmail.com">Send Email</a>
                                </div>

                                <div className="social_link">

                                    <small>You can connect with our social platfrom</small><br />
                                    <a href="#"><Facebook /></a>
                                    <a href="#"><Twitter /></a>
                                    <a href="#"><LinkedIn /></a>
                                </div>
                            </div>

                            <div className="footer_left_bottom_toggle">
                                <img className='logo_image' src={footerLogo} alt="images" />
                                <h6 className='logo_text'>Shahdharipara K.A.S Alim madrashah </h6>
                            </div>
                        </div>
                    </div>
                </section>
                <p className='all_rights'>All rights reserve by Abdullah al mamun</p>
            </div>

        </>
    )
}

export default Footer
