import "./sidebar.scss";
import { Link } from "react-router-dom";

import {
  Dashboard,
  AssignmentInd, ContactEmergency,
  SupervisedUserCircle, Engineering,
  FaceRetouchingNatural, EmojiPeople,
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
import { lightDarkSliceAction } from "../../../../settings/redux/slice/lightdark";

const Sidebar = () => {

  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="adminlogo">Madrashah Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">About</p>
          <Link title="Go to Teacher route" to="/teacherpannel" style={{ textDecoration: "none" }}>
            <li>
              <AssignmentInd className="icon" />
              <span>Teacher</span>
            </li>
          </Link>
          <Link title="Go to President route" to="/presidentpannel" style={{ textDecoration: "none" }}>
            <li>
              <ContactEmergency className="icon" />
              <span>President</span>
            </li>
          </Link>
          <Link title="Go to Secretary route" to="/secretarypannel" style={{ textDecoration: "none" }}>

            <li>
              <SupervisedUserCircle className="icon" />
              <span>Secratery</span>
            </li>
          </Link>
          <Link title="Go to Worker route" to={'/workerpannel'} style={{ textDecoration: "none" }}>
            <li>
              <Engineering className="icon" />
              <span>Worker</span>
            </li>
          </Link>
          <Link title="Go to Love of people route" to={'/loveofpeoplepannel'} style={{ textDecoration: "none" }}>
            <li>
              <Diversity1 className="icon" />
              <span>Love of peopole</span>
            </li>
          </Link>
          <p className="title">Result</p>
          <Link title="Go to result route" to={'/class1-4resultpannel'}>
            <li>
              <FaceRetouchingNatural className="icon" />
              <span>Class 1-4</span>
            </li>
          </Link>
          <Link title="Go to result route" to={'/class5-8resultpannel'}>
            <li>
              <EmojiPeople className="icon" />
              <span>Class 5-8</span>
            </li>
          </Link>
          <Link title="Go to result route" to={'/dakhilresultpannel'}>
            <li>
              <School className="icon" />
              <span>Dakhil</span>
            </li>
          </Link>
          <Link title="Go to result route" to={'/alimresultpannel'}>
            <li>
              <LocalLibrary className="icon" />
              <span>Alim</span>
            </li>
          </Link>
          <p className="title">Features</p>
          <Link title="Go to Alim route" to={'/alimpannel'}>
            <li>
              <AccountBalance className="icon" />
              <span>Alim</span>
            </li>
          </Link>
          <Link title="Go to Dakhil route"  to={'/dakhilpannel'}>
            <li>
              <AssuredWorkload className="icon" />
              <span>Dakhil</span>
            </li>
          </Link>
          <Link title="Go to JDC route" to={'/jdcpannel'}>
            <li>
              <HolidayVillage className="icon" />
              <span>JDC</span>
            </li>
          </Link>
          <Link title="Go to Ebtedayee route" to={'/ebtedayepannel'}>
            <li>
              <HouseSiding className="icon" />
              <span>Ebtedayee</span>
            </li>
          </Link>


          <p className="title">Notice</p>
          <Link title="Go to Notice route"  to={'/noticepannel'}>
            <li>
              <Campaign className="icon" />
              <span>Notice</span>
            </li>
          </Link>
          <Link title="Go to Student route"  to={'/studentpannel'}>
            <li>
              <PersonPin className="icon" />
              <span>Student</span>
            </li>
          </Link>
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
