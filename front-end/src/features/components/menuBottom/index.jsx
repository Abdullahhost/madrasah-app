import { Button, Grid } from "@mui/material";
import { DarkMode, ExpandMore, LightMode } from "@mui/icons-material";

import "./index.css";
import { NavLink, Link } from "react-router-dom";
import useFetch from "../../../settings/hooks";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { darkSliceAction } from "../../../settings/redux/slice/lightdark";

export const ToggleDark = () => {
  const dispatch = useDispatch();
  const lightDarkModedata = useSelector((state) => state.dark);
  const lightDarkMode = lightDarkModedata.dark;
  const toggleLamp = () => {
    dispatch(darkSliceAction.toggleDark());
  };

  return (
    <>
      <Button
        onClick={toggleLamp}
        style={
          lightDarkMode
            ? {
                color: "#fff",
                // background: "#2C318D",

                border: "1px solid #fff2",
                borderRadius: "4px",
                marginRight: "10px",
              }
            : {
                color: "#000",
                // background: "#2C318D",

                border: "1px solid #0002",
                borderRadius: "4px",
                marginRight: "10px",
              }
        }
      >
        {lightDarkMode ? (
          <LightMode fontSize="small" />
        ) : (
          <DarkMode fontSize="small" />
        )}
      </Button>
    </>
  );
};

const BottomMenu = () => {
  const lightDarkModedata = useSelector((state) => state.dark);
  const lightDarkMode = lightDarkModedata.dark;

  const getDataInformation = useSelector((state) => state.auth.user);

  const { data } = useFetch("https://madrasah-app.onrender.com/notice");
  const navigate = useNavigate();

  return (
    <>
      <Grid
        container
        flexDirection={"row"}
        alignItems={"center"}
        gap={1}
        className="menu_bottom_container"
      >
        <nav className="menu_bottom">
          <li>
            <NavLink
              style={lightDarkMode ? { color: "#fff" } : { color: "" }}
              to={"/"}
            >
              Home
            </NavLink>
          </li>

          <li className="dropdown_menu_section">
            <span className={lightDarkMode ? "menu_btn darkColor" : "menu_btn"}>
              About
              <ExpandMore className="menu_bottom_icon" />
            </span>
            <ul className="dropdown_menu">
              <li>
                <NavLink to={"/teacher"}>Teacher</NavLink>
              </li>
              <li>
                <NavLink to={"/president"}>President</NavLink>
              </li>
              <li>
                <NavLink to={"/secretory"}>Secretary</NavLink>
              </li>
              <li>
                <NavLink to={"/worker"}>Worker</NavLink>
              </li>
              <li>
                <NavLink to={"/loveofpeople"}>Love Of People</NavLink>
              </li>
            </ul>
          </li>

          <li className="dropdown_menu_section">
            <span className={lightDarkMode ? "menu_btn darkColor" : "menu_btn"}>
              Notice
              <ExpandMore className="menu_bottom_icon" />
            </span>
            <ul className="dropdown_menu">
              {data?.map((item) => {
                const { _id, noticeTitle, noticeDetails } = item;
                return (
                  <li key={_id}>
                    <Link
                      to={`/notice/${noticeTitle.toLowerCase()}`}
                      state={{ noticeTitle, noticeDetails }}
                    >
                      {noticeTitle}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <NavLink
              style={lightDarkMode ? { color: "#fff" } : { color: "" }}
              to={"/student"}
            >
              Students
            </NavLink>
          </li>

          <li className="dropdown_menu_section">
            <span className={lightDarkMode ? "menu_btn darkColor" : "menu_btn"}>
              Result
              <ExpandMore className="menu_bottom_icon" />
            </span>
            <ul className="dropdown_menu">
              <li>
                <NavLink to={"/ebtedayee_result_pannel"}>
                  Ebtedayee Result
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dakhil_result_pannel"}>Dakhil Result</NavLink>
              </li>
              <li>
                <NavLink to={"/alim_result_pannel"}>Alim Result</NavLink>
              </li>
            </ul>
          </li>

          <li className="dropdown_menu_section">
            <span className={lightDarkMode ? "menu_btn darkColor" : "menu_btn"}>
              Features
              <ExpandMore className="menu_bottom_icon" />
            </span>
            <ul className="dropdown_menu">
              <li>
                <NavLink to={"/alimsector"}>Alim Sector</NavLink>
              </li>
              <li>
                <NavLink to={"/dakhilsector"}> Dhakhil</NavLink>
              </li>
              <li>
                <NavLink to={"/ebtedayesector"}>Ebtedaye</NavLink>
              </li>
            </ul>
          </li>
        </nav>
        <Grid item>
          {getDataInformation ? (
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              {" "}
              <ToggleDark />{" "}
              <h4 style={lightDarkMode ? { color: "#fff" } : { color: "#000" }}>
                {getDataInformation.userName}
              </h4>{" "}
            </div>
          ) : (
            <div className="btn_group">
              <Button
                variant="outlined"
                color="success"
                size="small"
                onClick={() => navigate("login")}
              >
                Login
              </Button>
              <Button
                variant="contained"
                sx={{ background: "#2C318D" }}
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>

              <ToggleDark />
            </div>
          )}
        </Grid>
      </Grid>
    </>
  );
};
export default BottomMenu;
