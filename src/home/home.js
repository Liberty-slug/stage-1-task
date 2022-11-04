import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../profile.png'
import github from '../Icon.png'
import slack from '../Slack_icon.png'
import vector from '../Vector.png'
import I4G from '../I4G.png'
import share from '../Icon-share.png'
import dot from '../Icon-dot.png'

const Home = () => {
    return(
   <>
        <div className="linktree">

        {/* Share Button Start */}
        <div className="share-button">
            <img src={share} alt="" className='share'/>
            <img src={dot} alt="" className='dot'/>
        </div>
        {/* Share Button end */}

        {/* Profile Section start */}
        <div className="profile-section">
            <img src={logo} alt="" id="profile__img"/>
            <h2 id="twitter">Iamharyobahmi</h2>
            <h2 id="slack" hidden>LibertyTech</h2>
        </div>
        {/* Profile Section end */}

        {/* Link section Start */}
        <div className="link-section">
            <a href="https://twitter.com/iamharyobahmi" rel="Twitter link">Twitter Link</a>
            <a href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a>
            <a href="http://books.zuri.team" id="books" title="This is where you find books about design and coding">Zuri Books</a>
            <a href="https://books.zuri.team/python-for-beginners?ref_id=LibertyTech" id="book__python" title='Buy my Python book for beginners'>Python Books</a>
            <a href="https://background.zuri.team" id="pitch" title='Do a background check on a coder here'>Background Check for Code</a>
            <a href="https://books.zuri.team/design-rules" id="book__design" title='Get a free design book offered by Zuri.'>Design Books</a>
            <Link to="/contact" exact id="contact" title='Get a free design book offered by Zuri.'>Contact Me</Link>
        </div>
        {/* Link section ends */}


        {/* Social Section Start */}
        <div className="social-section">
            <img src={slack} alt="" height="30"/>
            <img src={github} alt="" height="30"/>
        </div>
        {/* Social Section end */}

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
   </>
    )
}
export default Home;