import React from 'react';
import './App.css';
import logo from './profile.png'
import github from './Icon.png'
import slack from './Slack_icon.png'
import vector from './Vector.png'
import I4G from './I4G.png'
import share from './Icon-share.png'
import dot from './Icon-dot.png'

function App() {
  return (
    <>
      <div className="linktree">
        <div className="share-button">
          <img src={share} alt="" className='share'/>
          <img src={dot} alt="" className='dot'/>
        </div>
         <div className="profile-section">
            <img src={logo} alt="" id="profile__img"/>
            <h2 id="twitter">Iamharyobahmi</h2>
            <h2 id="slack" hidden>Iamharyobahmi</h2>
         </div>
         <div className="link-section">
            <button><a href="https://twitter.com/iamharyobahmi" rel="Twitter link">Twitter Link</a></button>
            <button><a href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a></button>
            <button><a href="http://books.zuri.team" id="books">Zuri Books</a></button>
            <button><a href="https://books.zuri.team/python-for-beginners?ref_id=LibertyTech" id="book__python">Python Books</a></button>
            <button><a href="https://background.zuri.team" id="pitch">Background Check for Code</a></button>
            <button><a href="https://books.zuri.team/design-rules" id="book__design">Design Books</a></button>
         </div>
         <div className="social-section">
            <img src={slack} alt="" height="30"/>
            <img src={github} alt="" height="30"/>
         </div>
         <div className="footer">
            <div className="container">
              <img src={vector} alt="" height="30" />
              <p>HNG Internship 9 Frontend Task</p>
              <img src={I4G} alt="" height="30"/>
            </div>
         </div>
      </div>
    </>
  );
}

export default App;
