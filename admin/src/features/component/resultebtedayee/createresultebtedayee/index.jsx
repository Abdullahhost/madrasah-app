import axios from "axios";

import { useNavigate } from "react-router-dom";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";

const CreateEbtedayeeResult = () => {
  const navigate = useNavigate();

  const [pdfFilePic, setpdfFilePic] = useState(undefined);
  const [teacherData, setTeacherData] = useState({
    title: undefined,
    pdfFile: undefined,
  });

  const handleChange = (e) => {
    setTeacherData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      pdfFile: pdfFilePic,
    }));
  };

  const handleFileChange = (e) => {
    setpdfFilePic(e.target.files[0]);
  };

  const formData = new FormData();
  formData.append("title", teacherData.title);
  formData.append("pdfFile", pdfFilePic);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://madrasah-app.onrender.com/classonetofour/create",
        formData,
        { withCredentials: true }
      );
      navigate(-1);
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="create_teacher"
    >
      <div className="image_section">
        <embed
          className="teacher_profile"
          src={pdfFilePic ? URL.createObjectURL(pdfFilePic) : "pdfimage.png"}
        />
      </div>
      <div className="create_section_left">
        <div className="profile_uploader">
          <label className="pdfFiler_uploader_icon">
            <DriveFolderUploadOutlined />
          </label>
          <input
            type="file"
            accept=".pdf"
            name="pdfFile"
            required
            onChange={handleFileChange}
          />
        </div>

        <p>Title</p>
        <input
          required
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Title must be [Ebtedayee || Dakhil || Alim]"
        />

        <input className="submit_btn" type="submit" value={"Create Result"} />
      </div>
    </form>
  );
};

export default CreateEbtedayeeResult;
