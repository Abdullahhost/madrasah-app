

import { useLocation } from "react-router-dom"

import './index.css'

const NoticeDetails = () => {

    const location = useLocation();
    const {noticeTitle, noticeDetails} = location.state


    const splitIndexText = Math.round(noticeDetails.length * 0.8);
    const firstPartText = noticeDetails.slice(0, splitIndexText);
    const secondPartText = noticeDetails.slice(splitIndexText)

  return (
    <div className="notice_details_page">
      <h2>{noticeTitle}</h2>
      <br /><br />
      
  

      <small>{firstPartText}</small>
      <br /><br />
      <small>{secondPartText}</small>
    </div>
  )
}

export default NoticeDetails
