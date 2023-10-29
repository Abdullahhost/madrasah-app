
import HeroSlider, { MenuNav, Overlay, Slide } from "hero-slider";
import { Box } from '@mui/material';

import './index.css'

const Banner = () => {

  const bogliasco = "images/one (1).jpg";
  const countyClare = "images/one (2).jpg";
  const craterRock = "images/one (7).jpg";
  const giauPass = "images/one (5).jpg";


  return (
    <>
    <HeroSlider
      style={{margin: '0 auto'}}
      height={"65vh"}
      width={'100%'}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
        console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
      // animations={{
      //   slidingAnimation: 'fade'
      // }}
      
      >
      <Overlay>
        <Box className="bannar-heading">
          <h2>Shahdharipara khaja anayetullah sunni Alim Madrasah</h2>
          <h3>
            Always stands for truth islam and beside muhammad (sm)
          </h3>
        </Box>
      </Overlay>

      <Slide
        shouldRenderMask
        label="Main Building Alim Sector"
        background={{
          backgroundImageSrc: giauPass
        }}
        />

      <Slide
        shouldRenderMask
        label="Dhakhil Sector"
        background={{
          backgroundImageSrc: bogliasco
        }}
      />

      <Slide
        shouldRenderMask
        label="class 1-5 sector"
        background={{
          backgroundImageSrc: countyClare
        }}
        />

      <Slide
        shouldRenderMask
        label="Class 5-8 (Dhakhil) sector"
        background={{
          backgroundImageSrc: craterRock
        }}
      />

      <MenuNav />
    </HeroSlider>


        </>
  )
}

export default Banner


