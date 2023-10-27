import "./index.scss";

import {
  Dashboard,
  AssignmentInd, ContactEmergency,
  SupervisedUserCircle, Engineering,
  FaceRetouchingNatural,
  Diversity1,
  School,
  LocalLibrary,
  AccountBalance,
  AssuredWorkload,
  HolidayVillage,
  HouseSiding,
  Campaign,
  PersonPin
} from '@mui/icons-material'



import { useDispatch } from "react-redux";
import { lightDarkSliceAction } from "../../../settings/redux/slice/lightdark";
import {  NavLink } from "react-router-dom";

const Sidebar = () => {

  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <div className="top">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <span className="adminlogo">Madrashah Admin</span>
        </NavLink>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <NavLink title="Go to Home" to="/" style={{ textDecoration: "none" }}>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          </NavLink>
          <p className="title">About</p>
          <NavLink title="Go to Teacher route" to="/teacherpannel" style={{ textDecoration: "none" }}>
            <li>
              <AssignmentInd className="icon" />
              <span>Teacher</span>
            </li>
          </NavLink>
          <NavLink title="Go to President route" to="/presidentpannel" style={{ textDecoration: "none" }}>
            <li>
              <ContactEmergency className="icon" />
              <span>President</span>
            </li>
          </NavLink>
          <NavLink title="Go to Secretary route" to="/secretorypannel" style={{ textDecoration: "none" }}>

            <li>
              <SupervisedUserCircle className="icon" />
              <span>Secratery</span>
            </li>
          </NavLink>
          <NavLink title="Go to Worker route" to={'/workerpannel'} style={{ textDecoration: "none" }}>
            <li>
              <Engineering className="icon" />
              <span>Worker</span>
            </li>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} title="Go to Love of people route" to={'/loveofpeoplepannel'} >
            <li>
              <Diversity1 className="icon" />
              <span>Love of peopole</span>
            </li>
        </NavLink>
          <p className="title">Result</p>
          <NavLink style={{ textDecoration: "none" }} title="Go to result route" to={'/class1to8resultpannel'}>
            <li>
              <FaceRetouchingNatural className="icon" />
              <span>Class 1-8</span>
            </li>
           </NavLink>
          <NavLink style={{ textDecoration: "none" }} title="Go to result route" to={'/dakhilresultpannel'}>
            <li>
              <School className="icon" />
              <span>Dakhil</span>
            </li>
           </NavLink>
          <NavLink style={{ textDecoration: "none" }} title="Go to result route" to={'/alimresulttpannel'}>
            <li>
              <LocalLibrary className="icon" />
              <span>Alim</span>
            </li>
       </NavLink>
          <p className="title">Features</p>
          <NavLink style={{ textDecoration: "none" }} title="Go to Alim route" to={'/alimpannel'}>
            <li>
              <AccountBalance className="icon" />
              <span>Alim</span>
            </li>
       </NavLink>
          <NavLink style={{ textDecoration: "none" }} title="Go to Dakhil route"  to={'/dakhilpannel'}>
            <li>
              <AssuredWorkload className="icon" />
              <span>Dakhil</span>
            </li>
       </NavLink>
          <NavLink style={{ textDecoration: "none" }} title="Go to JDC route" to={'/jdcpannel'}>
            <li>
              <HolidayVillage className="icon" />
              <span>JDC</span>
            </li>
  </NavLink>
          <NavLink style={{ textDecoration: "none" }} title="Go to Ebtedayee route" to={'/ebtedayepannel'}>
            <li>
              <HouseSiding className="icon" />
              <span>Ebtedayee</span>
            </li>
        </NavLink>


          <p className="title">Notice</p>
          <NavLink title="Go to Notice route"  to={'/noticepannel'}>
            <li>
              <Campaign className="icon" />
              <span>Notice</span>
            </li>
       </NavLink>
          <NavLink title="Go to Student route"  to={'/studentpannel'}>
            <li>
              <PersonPin className="icon" />
              <span>Student</span>
            </li>
      </NavLink>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch(lightDarkSliceAction.toggleLamp())}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
