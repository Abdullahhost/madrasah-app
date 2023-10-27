/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from "@mui/material"

import './index.css';
const Features = () => {
    return (
        <>
            <section className='features'>

                <Grid container direction={'column'} alignItems={'center'} gap={2}>
                    <h1 className="features_main_heading">Features of Our Madrashah</h1>
                    <Typography variant='contained' textAlign={'center'} sx={{ color: '#777777', fontWeight: 'bolder' }} >Embarking on a journey with our Madrashah promises a profound spiritual and educational experience. Our institution is dedicated to providing a nurturing environment where individuals can deepen their understanding of Islamic teachings, morals, and values. Through dedicated mentors, comprehensive curriculum, and a sense of community, joining our Madrashah offers an opportunity to strengthen faith, cultivate character, and contribute positively to both personal and communal growth.</Typography>
                </Grid>

                <div className='underLine'></div>

                <div className="features_section_wrapper">
                    <div className="features_section">
                        <div className="features_section_part">
                            <div>
                                <img className='features_image' src="images/businessman-gif-46.gif" alt="images" />
                            </div>
                            <div>
                                <h2 className='features_heading'>Expert Faculty</h2>
                                <p>Our Madrashah is staffed by a dedicated team of qualified and experienced instructors who are well-versed in Islamic studies and related disciplines. They are committed to nurturing a deep understanding of Islamic principles while fostering critical thinking and open dialogue.</p>
                            </div>
                        </div>
                        <div className="features_section_part">
                            <div>
                                <img className='features_image' src="images/Developing-personal-character-in-students-2.gif" alt="images" />
                            </div>
                            <div>
                                <h2 className='features_heading'>Character Development</h2>
                                <p>Beyond academic excellence, we emphasize character development and the embodiment of Islamic values. Our students are guided towards becoming responsible, compassionate, and morally upright individuals who contribute positively to society.</p>
                            </div>
                        </div>

                        <div className="features_section_part">
                            <div>
                                <img className='features_image' src="images/featurec_curiculm.webp" alt="images" />
                            </div>
                            <div>
                                <h2 className='features_heading'>Structured Curriculum</h2>
                                <p>Our Madrashah is staffed by a dedicated team of qualified and experienced instructors who are well-versed in Islamic studies and related disciplines. They are committed to nurturing a deep understanding of Islamic principles while fostering critical thinking and open dialogue.</p>
                            </div>
                        </div>

                    </div>
                    <div className="features_section">
                       
                        <div className="features_section_part">
                            <div>
                                <img className='features_image' src="images/modern_approch.gif
                                " alt="images" />
                            </div>
                            <div>
                                <h2 className='features_heading'>Modern Approach</h2>
                                <p>While rooted in traditional teachings, our Madrashah embraces modern teaching methods and technology to enhance the learning experience. We utilize multimedia resources, online platforms, and interactive sessions to engage students and make learning more accessible.</p>
                            </div>
                        </div>

                        <div className="features_section_part">
                            <div>
                                <img className='features_image' src="images/comunity.gif" alt="images" />
                            </div>
                            <div>
                                <h2 className='features_heading'>Community Engagement</h2>
                                <p>Our Madrashah actively engages with the local community through events, workshops, and outreach programs. This provides students with the opportunity to apply their knowledge in practical settings and contribute to the betterment of society.</p>
                            </div>
                        </div>
                        <div className="features_section_part">
                            <div>
                                <img className='features_image' src="images/progress1.gif" alt="images" />
                            </div>
                            <div>
                                <h2 className='features_heading'>Progress Tracking</h2>
                                <p>We keep parents and guardians informed about their child's progress through regular assessments and reports. This transparency ensures that everyone involved is aware of the student's academic and personal development.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='underLine'></div>
            </section>

            {/* Absolutely, here's a sample features section for a Madrashah:

---

## ****

Our Madrashah is designed to provide a comprehensive and enriching educational experience that combines religious teachings with academic excellence. We take pride in offering a range of features that contribute to the holistic development of our students.





### 5. **Inclusive Environment:**
We maintain an inclusive and welcoming environment that respects diverse backgrounds and perspectives. Students from all walks of life are encouraged to join our Madrashah, fostering a sense of unity and understanding among the community.

### 6. **Community Engagement:**
Our Madrashah actively engages with the local community through events, workshops, and outreach programs. This provides students with the opportunity to apply their knowledge in practical settings and contribute to the betterment of society.

### 7. **Personalized Learning:**
Recognizing that each student has unique learning needs, we offer personalized attention and support. Our small class sizes enable instructors to tailor their teaching methods to individual strengths and challenges.

### 8. **Progress Tracking:**
We keep parents and guardians informed about their child's progress through regular assessments and reports. This transparency ensures that everyone involved is aware of the student's academic and personal development.

### 9. **Facilities and Resources:**
Our Madrashah boasts modern facilities, including well-equipped classrooms, a library with an extensive collection of Islamic literature, and dedicated spaces for prayer and reflection.

### 10. **Lifelong Learning:**
Graduating from our Madrashah marks the beginning of a lifelong journey of learning and growth. We equip students with a strong foundation in Islamic knowledge, empowering them to continue their studies and contribute to the global Muslim community.

At our Madrashah, we are committed to nurturing informed, compassionate, and responsible individuals who carry the teachings of Islam into every aspect of their lives. Join us on this enriching educational journey and become part of a community dedicated to both personal growth and societal betterment.

---

Feel free to customize this text according to the specific details, goals, and values of your Madrashah. */}
        </>
    )
}

export default Features


