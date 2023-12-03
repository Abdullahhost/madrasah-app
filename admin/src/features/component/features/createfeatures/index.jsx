import axios from "axios";

import { useNavigate } from "react-router-dom";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";

const FeaturesCreate = () => {
  const navigate = useNavigate();

  const [profilePic, setProfilePic] = useState(undefined);
  const [featuresData, setFeaturesData] = useState({
    title: undefined,
    description: undefined,
    numberOfTeacher: undefined,
    established: undefined,
    profile: undefined,
  });

  const handleChange = (e) => {
    setFeaturesData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      profile: profilePic,
    }));
  };

  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const formData = new FormData();
  formData.append("title", featuresData.title);
  formData.append("description", featuresData.description);
  formData.append("numberOfTeacher", featuresData.numberOfTeacher);
  formData.append("established", featuresData.established);

  formData.append("profile", profilePic);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://madrasah-app.onrender.com/alimfeatures/create",
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
        <img
          className="teacher_profile"
          src={profilePic ? URL.createObjectURL(profilePic) : "avater.webp"}
          alt="profileImage"
        />
      </div>
      <div className="create_section_left">
        <div className="profile_uploader">
          <label className="profiler_uploader_icon">
            <DriveFolderUploadOutlined />
          </label>
          <input
            type="file"
            name="profile"
            required
            onChange={handleFileChange}
          />
        </div>

        <p>Features title</p>
        <input
          required
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Features title here"
        />

        <p>Number Of Teacher</p>
        <input
          required
          type="number"
          name="numberOfTeacher"
          onChange={handleChange}
          placeholder=" Number Of Teacher here"
        />

        <p>Established</p>
        <input
          required
          type="text"
          name="established"
          onChange={handleChange}
          placeholder=""
        />
      </div>

      <div className="create_section_right">
        <p>Description</p>
        <textarea
          cols={40}
          rows={13}
          name="description"
          onChange={handleChange}
          style={{
            padding: "1rem",
            fontSize: ".9rem",
            fontFamily: "sans-serif",
            textAlign: "justify",
          }}
        ></textarea>

        <input className="submit_btn" type="submit" value={"Create Features"} />
      </div>
    </form>
  );
};

export default FeaturesCreate;
