
import emailjs from 'emailjs-com'

import './index.css'


const MailPages = () => {


  const handleSubmit = (e) => {


    e.preventDefault();


    emailjs.sendForm('service_3954jwk', 'template_cz8e00m', e.target, 'RvUiNuPUZDl3FmNRz').then(res => {
      console.log(res)
      alert("Message send successfully")
    }).catch(err => {
      console.log(err)
    })

    e.target.reset();

  }

  return (
    <>
      <section id='contuctus' className="mailSection">

        <div className="form_label_part">
          <h2>Contuct us</h2>
          <h4>
            Please Contuct bellow reasons
          </h4>
          <div className='bugs_list_section'>
            <div>
              <li className='bugs_list'>Technical Support</li>
              <li className='bugs_list'>Feature Requests</li>
              <li className='bugs_list'>Bugs and Errors</li>
              <li className='bugs_list'>Customization or Integration</li>
              <li className='bugs_list'>Questions and Clarifications</li>
              <li className='bugs_list'>Account Issues</li>
            </div>

            <div>
              <li className='bugs_list'>Performance Optimization</li>
              <li className='bugs_list'>Documentation</li>
              <li className='bugs_list'>User Education</li>
              <li className='bugs_list'>Complaints</li>
              <li className='bugs_list'>Complaints</li>
            </div>
          </div>

        </div>


      <form className='form_section' onSubmit={handleSubmit}>
        <div className='form_box'>

          <div className="form-group">
            <label htmlFor="name">Name</label><br />
            <input type="text" title="Enter you'r Name" required name='name' placeholder='Your Name Here!' />
          </div>

          <div className="form-group">
            <label htmlFor="email">Eamil</label><br />
            <input type="email" name='email' placeholder='Enter your Valid password' required pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" title='Enter Your valid Email' />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label><br />
            <textarea name="message" id="message" cols="30" rows="10" required ></textarea>
          </div>
          <input className='submit_btn' type="submit" value={"Submit"} />
        </div>
      </form>
    </section >

    </>
  )
}

export default MailPages


