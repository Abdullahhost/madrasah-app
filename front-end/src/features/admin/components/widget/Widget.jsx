import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Link } from "react-router-dom";

import useFetch from '../../../../settings/hooks'

// eslint-disable-next-line react/prop-types
const Widget = ({ type }) => {
  
  const maindata = type;
const firstText = maindata.slice(5, maindata.length);


const { data }  = useFetch(`http://127.0.0.1:5001/${firstText}/${type}`)

  let propsdata;

  //temporary
  const amount = data;
  const diff = 20;

  switch (type) {
    case "countteacher":
      propsdata = {
        title: "teacher",
        isMoney: false,
        link: "See all teacher",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "countstudent":
      propsdata = {
        title: "student",
        isMoney: false,
        link: "View all student",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "countnotice":
      propsdata = {
        title: "notice",
        link: "View net notice",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "countloveofpeople":
      propsdata = {
        title: "love of people",
        link: "See details love of prople",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{propsdata.title.toUpperCase()}</span>
        <span className="counter">
         {amount}
        </span>
        <Link to={'/'} className="link">{propsdata.link}</Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {propsdata.icon}
      </div>
    </div>
  );
};

export default Widget;
