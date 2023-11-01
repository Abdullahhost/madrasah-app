
import './index.css'

import { useLocation } from "react-router-dom"
import { useSelector } from 'react-redux'

const NoticeDetails = () => {


  const location = useLocation();
  const { noticeTitle, noticeDetails } = location.state

  const splitIndexText = Math.round(noticeDetails.length * 0.8);
  const firstPartText = noticeDetails.slice(0, splitIndexText);
  const secondPartText = noticeDetails.slice(splitIndexText)

  const lightDarKMode = useSelector(state => state.dark.dark);

  return (
    <div style={lightDarKMode ?
      { border: '1px solid #fff' }
      :
      { border: '1px solid #000' }}
      className="notice_details_page">
      <h2 style={lightDarKMode ?
      { color: '#F1F1F1' }
      :
      { color: '#0008' }}>{noticeTitle}</h2>
      <br /><br />



      <small  style={lightDarKMode ?
      { color: '#F1F1F1' }
      :
      { color: '#0008' }}>{firstPartText}</small>
      <br /><br />
      <small  style={lightDarKMode ?
      { color: '#F1F1F1' }
      :
      { color: '#0008' }}>{secondPartText}</small>
    </div>
  )
}

export default NoticeDetails
