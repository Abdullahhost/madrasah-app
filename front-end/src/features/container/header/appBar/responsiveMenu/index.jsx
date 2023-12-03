import { Button } from "@mui/material";
import "./index.css";
import TopMenu from "../../../../components/topMenu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useFetch from "../../../../../settings/hooks";
import { useSelector } from "react-redux";
const ResponsiveMenuBar = () => {
  const { data } = useFetch("https://madrasah-app.onrender.com/notice");

  const getDataInformation = useSelector((state) => state.auth.user);

  const navigate = useNavigate();
  const handleClick = () => {};

  return (
    <div>
      <div className="menu_responsive_section"> 
        <ul className="">
          <li>
            <NavLink onClick={handleClick} to="/" tabIndex={1}>
              Home
            </NavLink>
          </li>
          <div className="menu_bottom_sub">
            <li className="responsive_menu_btn">
              <span tabIndex={1}>About</span>
            </li>
            <div className="menu_responsive_sub_menu">
              <ul>
                <li>
                  <NavLink to="/teacher" tabIndex={1}>
                    Teacher
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/president" tabIndex={1}>
                    President
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/secretory" tabIndex={1}>
                    Secretary
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/worker" tabIndex={1}>
                    Worker
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/loveofpeople" tabIndex={1}>
                    Love Of People
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="menu_bottom_sub">
            <li className="responsive_menu_btn">
              <span tabIndex={1}>Notice</span>
            </li>
            <div className="menu_responsive_sub_menu">
              <ul>
                {data?.map((item) => {
                  const { _id, noticeTitle, noticeDetails } = item;
                  return (
                    <li key={_id}>
                      <Link
                        tabIndex={1}
                        to={`/notice/${noticeTitle.toLowerCase()}`}
                        state={{ noticeTitle, noticeDetails }}
                      >
                        {noticeTitle}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <li>
            <NavLink to={"/student"} tabIndex={1}>
              Students
            </NavLink>
          </li>
          <div className="menu_bottom_sub">
            <li className="responsive_menu_btn">
              <span tabIndex={1}>Result</span>
            </li>
            <div className="menu_responsive_sub_menu">
              <li>
                <NavLink to={"/ebtedayee_result_pannel"} tabIndex={1}>
                  Ebtedayee Result
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dakhil_result_pannel"} tabIndex={1}>
                  Dakhil Result
                </NavLink>
              </li>
              <li>
                <NavLink to={"/alim_result_pannel"} tabIndex={1}>
                  Alim Result
                </NavLink>
              </li>
            </div>
          </div>
          <div className="menu_bottom_sub">
            <li className="responsive_menu_btn">
              <span tabIndex={1}>Features</span>
            </li>
            <div className="menu_responsive_sub_menu">
              <li>
                <NavLink to={"/alimsector"} tabIndex={1}>
                  Alim Sector
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dakhilsector"} tabIndex={1}>
                  Dhakhil
                </NavLink>
              </li>
              <li>
                <NavLink to={"/ebtedayesector"} tabIndex={1}>
                  Ebtedaye
                </NavLink>
              </li>
            </div>
          </div>
        </ul>
        <div className="menu_responsive_link_section">
          <TopMenu />
        </div>

        <div>
          {getDataInformation ? (
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <h4 className="userDataName">{getDataInformation.userName}</h4>
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
            </div>
          )}
        </div>
        <div className="btn_group_section">
          <div className="btn_group">
            <Button variant="outlined" color="success" size="small">
              Login
            </Button>
            <Button
              className="signUpBtn"
              variant="contained"
              sx={{ background: "#212121" }}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenuBar;
