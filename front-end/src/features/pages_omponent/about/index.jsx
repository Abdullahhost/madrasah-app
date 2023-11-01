

import './index.css'

import { useSelector } from 'react-redux'


import { Grid, Typography } from '@mui/material'

const About = () => {
const lightDarkMode = useSelector(state => state.dark.dark)
  return (
    <div
      className='about_section'
      style={lightDarkMode ? {backgroundImage: 'radial-gradient(#555 0.45px, #000 0.45px)',color: "#fff", backgroundColor: "#000"} : {backgroundImage: 'radial-gradient(#5644f7 0.45px, #ffffff 0.45px)', backgroundColor: '#fff'} }
      
      >
      <Grid container justifyContent={'center'} gap={5} className="about_section_title" marginBottom={5}>
        <Typography textAlign={'center'} lineHeight={2} variant='overline' sx={{ fontSize: '.9rem !important' }}>Why and how Shahdharipara K.A.S Alim Madrashah is the Best</Typography>
        <li><a href="#">Enroll Now!</a></li>
      </Grid>
      <Grid container direction={'column'} alignItems={'center'} gap={3} marginBottom={5}>
        <h1>Shahdharipara K.A.S Alim Madrashah Your Trusted institute</h1>
        <Typography variant='contained' textAlign={'center'} sx={{ color: '#777777' }} >Embarking on a journey with our Madrashah promises a profound spiritual and educational experience. Our institution is dedicated to providing a nurturing environment where individuals can deepen their understanding of Islamic teachings, morals, and values. Through dedicated mentors, comprehensive curriculum, and a sense of community, joining our Madrashah offers an opportunity to strengthen faith, cultivate character, and contribute positively to both personal and communal growth.</Typography>
      </Grid>

      <div className='underLine'></div>

      <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'} gap={2}>
        <Grid item width={'min(100% - .1rem, 80ch)'} className={lightDarkMode ? "dark_about_section_paragraph" : "about_section_paragraph" } >
          <Typography variant='overline' sx={{ fontSize: '1.6rem !important', }}>
            our Mission statement
          </Typography>
          <br />
          <Typography  variant='caption' sx={{fontSize: '1rem !important', fontWeight: 'bolder !important' }} >✔About Our Madrashah </Typography>
          <Typography variant='body2' paddingTop={.5}>Welcome to Shahdharipara K.K.S Alim Madrashah, a distinguished institution dedicated to fostering academic excellence, personal growth, and a vibrant community. Established [Year of Establishment], our college has been a pillar of education, innovation, and enlightenment for [Number] years.
          </Typography >
        </Grid>
        <Grid item width={'min(100% - .1rem, 80ch)'} className={lightDarkMode ? "dark_about_section_paragraph" : "about_section_paragraph" }>
          <Typography  variant='caption' sx={{fontSize: '1rem !important', fontWeight: 'bolder !important' }} >✔Our Mission </Typography>
          <Typography variant='body2' paddingTop={.5}>At Shahdharipara K.K.S Alim Madrashah, our mission is to empower the next generation of leaders, thinkers, and change-makers. We are committed to providing an inclusive and nurturing environment where students can explore their passions, challenge their boundaries, and develop the skills needed to thrive in an ever-evolving world.
          </Typography>
        </Grid>
        <Grid item width={'min(100% - .1rem, 80ch)'} className={lightDarkMode ? "dark_about_section_paragraph" : "about_section_paragraph" }>
          <Typography  variant='caption' sx={{fontSize: '1rem !important', fontWeight: 'bolder !important' }} >✔Our Distinctive Approach</Typography>
          <Typography variant='body2' paddingTop={.5}>What sets Shahdharipara K.K.S Alim Madrashah, apart is our unwavering commitment to academic rigor and holistic development. We blend a rich academic curriculum with hands-on experiences, cutting-edge research opportunities, and a wide range of extracurricular activities. This multidimensional approach ensures that our graduates are not only well-prepared academically but also possess the adaptability and creativity to excel in various domains.
          </Typography>
        </Grid>
        <Grid item width={'min(100% - .1rem, 80ch)'} className={lightDarkMode ? "dark_about_section_paragraph" : "about_section_paragraph" }>
          <Typography  variant='caption' sx={{fontSize: '1rem !important', fontWeight: 'bolder !important' }} >✔Faculty Excellence</Typography>
          <Typography variant='body2' paddingTop={.5}>Our esteemed faculty members are at the heart of Shahdharipara K.K.S Alim Madrashahs success. Comprising world-class educators, researchers, and mentors, they inspire and guide students on their educational journey. Their dedication to intellectual exploration and their commitment to nurturing a collaborative learning environment are instrumental in shaping the future leaders of tomorrow.
          </Typography>
        </Grid>
        <Grid item width={'min(100% - .1rem, 80ch)'} className={lightDarkMode ? "dark_about_section_paragraph" : "about_section_paragraph" }>
          <Typography  variant='caption' sx={{fontSize: '1rem !important', fontWeight: 'bolder !important' }} >✔Community and Diversity</Typography>
          <Typography variant='body2' paddingTop={.5}>We take pride in our diverse and vibrant community, where students from all walks of life come together to learn, share, and grow. Our campus is a melting pot of cultures, perspectives, and ideas, fostering an atmosphere of mutual respect and global awareness. Through student clubs, cultural events, and community outreach programs, we celebrate this diversity and encourage a spirit of unity.
          </Typography>
        </Grid>
        <Grid item width={'min(100% - .1rem, 80ch)'} className={lightDarkMode ? "dark_about_section_paragraph" : "about_section_paragraph" }>
          <Typography  variant='caption' sx={{fontSize: '1rem !important', fontWeight: 'bolder !important' }} >✔Join Us</Typography>
          <Typography variant='body2' paddingTop={.5}>Whether you are a prospective student, a parent, an educator, or a member of the community, we invite you to explore [Your College Name] further. Discover the opportunities, resources, and connections that await you. Become a part of a community that values intellectual curiosity, fosters personal growth, and believes in the power of education to shape a brighter future.
          </Typography>
        </Grid>
      </Grid>

    
      <div className='underLine'></div>
    </div>
  )
}

export default About
