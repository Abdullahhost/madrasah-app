import { Link } from "react-router-dom";

import useFetch from "../../../settings/hooks";
import { Delete, Update } from "@mui/icons-material";

const LoveOfPeople = () => {
  const { data } = useFetch("https://madrasah-app.onrender.com/loveofpeople");
  return (
    <div style={{ padding: "1rem" }} className="table">
      <table>
        <thead>
          <tr>
            <th>People Name</th>
            <th>Profile Picture</th>
            <th>Address</th>
            <th>Mobile Number</th>
            <th>Email Address</th>

            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((element, index) => {
            const {
              _id,
              peopleName,
              profile,
              peopleAddress,
              mobileNumber,
              emailAddress,
            } = element;
            console.log(profile);
            return (
              <tr key={_id} className={index % 2 !== 0 ? "oddrow" : "evenrow"}>
                <td>{peopleName}</td>
                <td>
                  <img className="profile_picture" src={profile} alt="image" />
                </td>
                <td>{peopleAddress}</td>
                <td>{mobileNumber}</td>
                <td>{emailAddress}</td>
                <td style={{ padding: "0rem 1rem" }}>
                  <Link
                    to={"/updateloveofpeople"}
                    state={{
                      _id,
                      peopleName,
                      emailAddress,
                      profile,
                      mobileNumber,
                      peopleAddress,
                    }}
                  >
                    <Update />
                  </Link>
                </td>
                <td style={{ padding: "0rem 1rem" }}>
                  <Link
                    to={"/deleteloveofpeople"}
                    state={{ _id }}
                    style={{
                      border: "none",
                      cursor: "pointer",
                      background: "transparent",
                    }}
                  >
                    <Delete color="error" />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="new_btn">
        <Link to="/createloveofpeople" className="new_btn_icon">
          +
        </Link>
      </div>
    </div>
  );
};
export default LoveOfPeople;
