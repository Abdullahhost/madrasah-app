import { useState } from "react";

import { Button, Grid } from "@mui/material";
import { MenuOpen, CancelPresentation } from "@mui/icons-material";
import BottomMenu, { ToggleDark } from "../../../components/menuBottom";

import logo from "../../../../../public/images/logo.png";

import "./index.css";
import ResponsiveMenuBar from "./responsiveMenu";
import TopMenu from "../../../components/topMenu";

import { useSelector } from "react-redux";
import useFetch from "../../../../settings/hooks";

const AppBar = () => {
  const [toggleBtn, setToggleBtn] = useState(false);

  const ligthDarkMode = useSelector((state) => state.dark.dark);

  const { data } = useFetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=24.116043859486727&lon=89.96874235849384&appid=442b8c73241930713f467c57509395e8&units=metric"
  );
  const farenhaet = data?.main?.temp;

  return (
    <div>
      <Grid
        className="menu_wrapper_container"
        width={"min(100% - 3rem, 155ch)"}
        m={"0 auto"}
        alignItems={"center"}
        p={2}
        container
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <Grid
            className="logo_section"
            container
            alignItems={"center"}
            sx={{ flexWrap: "wrap-reverse" }}
            gap={1}
          >
            <img src={logo} alt="images" className="logo" />
            <div>
              <h3 className={`${ligthDarkMode ? "darkStyle" : "stylist"}`}>
                Shahdhari Para
              </h3>
              <h5 className={`${ligthDarkMode ? "darkStyle" : "stylist"}`}>
                K.A.S
              </h5>
              <h6 className={`${ligthDarkMode ? "darkStyle" : "stylist"}`}>
                Alim Madrahsah
              </h6>
            </div>
          </Grid>
        </Grid>
        <nav>
          <Grid item>
            <div className="top_menu_container">
              <Grid item>
                <div>
                  <div className="top_menu_wrapper">
                    <div className="top_menu_Link_container">
                      <TopMenu />
                    </div>
                    <div className="weather_content">
                      <div className="weatherIcon">
                        <img
                          className="weatherimageBox"
                          src={`https://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`}
                          alt="image"
                        />
                      </div>
                      <div>
                        <h3 className="temperature">
                          {Number(farenhaet)}
                          <sup>&#176;c</sup> |
                        </h3>
                      </div>
                      <div className="descriptionbox">
                        <p className="weatherDescription topcontent">
                          Humadity : {data?.main?.humidity}
                          {"%"}{" "}
                        </p>
                        <p className="weatherDescription">
                          Wind : {data?.wind?.speed.toFixed()}
                          {"km/h"}
                        </p>
                        <p className="weatherDescription">
                          {data?.weather[0]?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item className="menu_bottom_section">
                <BottomMenu />
              </Grid>
              <div className="menu_bottom_section_toggle">
                <ToggleDark />
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    background: "#2C318D",
                    color: "#fff",
                    margin: "0 !important",
                  }}
                  onClick={() => setToggleBtn(!toggleBtn)}
                >
                  {toggleBtn ? <CancelPresentation /> : <MenuOpen />}
                </Button>
              </div>
            </div>
          </Grid>
        </nav>
      </Grid>

      <div
        style={
          toggleBtn
            ? {
                transition: "all ease-in-out .3s",
                transform: "translateY(0px)",
              }
            : {
                position: "absolute",
                top: "-100%",
                left: "0",
                width: "100%",
                transform: "translateY(-100%)",
                transition: "all ease-in-out .3s",
              }
        }
      >
        <ResponsiveMenuBar />
      </div>
    </div>
  );
};

export default AppBar;
