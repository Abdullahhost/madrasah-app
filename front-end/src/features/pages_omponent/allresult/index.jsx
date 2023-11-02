import { Button } from "@mui/material";
import useFetch from "../../../settings/hooks";
import { NavLink } from "react-router-dom";
import { PictureAsPdf } from "@mui/icons-material";
import { useSelector } from "react-redux";

const EbtedayeeResult = () => {

  
  const { data } = useFetch(`https://madrasah-app.onrender.com/classonetofour/Ebtedayee`);
  const lightDarkMode = useSelector(state => state.dark.dark)
  return (
    <div>
      {data?.map((ele) => {
        const { _id, title, pdfFile } = ele
        return (
          <div style={{ width: '90%', margin: "20px auto" }} key={_id}>
          <h2
            className={"result_heading"}
            style={lightDarkMode ? { background: "#fff", color: '#000' } : { background: '#000', color: "#fff" }}>{title}
            
            </h2>
          <embed
            className="pdfReader"
            src={`https://madrasah-app.onrender.com/${pdfFile}`}
            width="100%"
            height="650px"
            title={'samplePdf'}

          />
          <div className="btn_box" >
            <Button size='small' variant="contained" startIcon={<PictureAsPdf />}>
              <NavLink to={`https://madrasah-app.onrender.com/${pdfFile}`}>View</NavLink>
            </Button>
            <span>Click View Button to view Ebtedayee Result</span>
          </div>

        </div>
        )
      })}
    </div>
  )
}
export default EbtedayeeResult
