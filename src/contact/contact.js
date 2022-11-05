import React from 'react'
import '../App.css';
import vector from '../Vector.png'
import I4G from '../I4G.png'

const Contact = () => {
    return(
        <div className="contact-page">
            <div className="containeer">
                <div className="content">
                    <div className="content-detail">
                        <h2 className='heading'>Contact Me</h2>
                        <p className="supporting-text">Hi there, contact me to ask me about anything you have in mind</p>
                    </div>
                    <div className="form">
                        <div className="form-field">
                            <div className="name-row">
                                <div className="first-name">
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" placeholder='Enter your first name' id="first_name"/>
                                </div>
                                <div className="last-name">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" placeholder='Enter your last name' id="last_name"/>
                                </div>
                            </div>
                            <div className="email">
                                <label htmlFor="email">Email</label>
                                <input type="email" placeholder='yourname@email.com' id="email"/>
                            </div>
                            <div className="textarea">
                                <label htmlFor="message">Message</label>
                                <textarea type="text" placeholder="Send me a message and I'll reply you as soon as possible" id="message"/>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox"/>
                                <p>You agree to providing your data to (name) who may contact you.</p>
                            </div>
                        </div>
                        <button id='btn_submit'>Send message</button>
                    </div>
                </div>
            </div>
                    {/* Footer Section start */}
                    <div className="footer">
                        <div className="container">
                        <img src={vector} alt="" height="30" />
                        <p>HNG Internship 9 Frontend Task</p>
                        <img src={I4G} alt="" height="30"/>
                        </div>
                    </div>
                    {/* Footer Section end */}
        </div>
    )
}
export default Contact;