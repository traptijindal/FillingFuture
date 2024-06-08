import React from 'react';
import "./Footer.css";
import twitter from "/Vector.png";
import linkedin from "/iconmonstr-linkedin-3.png";
import insta from "/iconmonstr-instagram-11.png"
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
      <div className='slantedDivA'>
        <div className='content mt-20'>
          <div className="flex flex-col md:flex-row md:space-x-20 space-x-28 space-y-4 md:space-y-0">
            <div>
              <h2 className="text-lg font-bold text-[#FFA500]">Filling<span className="text-[#1D3C49]">Future</span></h2>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10 text-sm">
              <div>
                <h3 className="font-bold">Donate Now</h3>
                <ul className="space-y-2">
                  <Link to='/donate-Once'><li><a href="#" className="hover:underline">Donate once</a></li></Link>
                  <Link to='/donate-monthly'><li><a href="#" className="hover:underline">Donate monthly</a></li></Link>
                  <Link to='/subscription'><li><a href="#" className="hover:underline">Join Spring</a></li></Link>
                  <Link to='/sponsor'><li><a href="#" className="hover:underline">Become a sponsor</a></li></Link>
                </ul>
              </div>
              <div>
                <h3 className="font-bold">Useful Links</h3>
                <ul className="space-y-2">
                  <Link to='/login'><li><a href="#" className="hover:underline">Login</a></li></Link>
                  <Link to='/signup'> <li><a href="#" className="hover:underline">Sign Up</a></li></Link>
                </ul>
              </div>
              <div>
                <h3 className="font-bold">Company</h3>
                <ul className="space-y-2">
                  <Link to='/about'><li><a href="#" className="hover:underline">About</a></li></Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 mt-6 justify-center md:justify-start">
            <a href="#" className="hover:underline"><img src={insta} alt="" /></a>
            <a href="#" className="hover:underline"><img src={linkedin} alt="" /></a>
            <a href="#" className="hover:underline"><img src={twitter} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;



