import React from "react";
import Logo from "../assets/logo.png";
import Image1 from "../assets/1.png";
import Image2 from "../assets/2.png";
import Image3 from "../assets/3.png";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";
import "./home.css";

const Home = () => {
  return (
    <div className='bg-container'>
      <div className='main-section'>
        <img src={Logo} alt='logo' className='logo-img' />
        <div className='company-info'>
          <h3 className='text-1'>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h3>
          <li>
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for <br />
            various projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            ESSL{"(Energy Efficiency Services Limited)"} to replace the
            <br /> old inefficient pumps with 5 star rated energy efficient
            smart pumps with IoT enabled control panel.
          </li>
        </div>

        <div className='awards-section'>
          <img src={Image1} alt='award-img1' className='img-1' />
          <img src={Image2} alt='award-img2' className='img-2' />
        </div>

        <p className='description'>
          Government of India has awarded the
          <span> "National Energy Conservation Award 2018". </span>{" "}
          Mr.G.Selvaraj, Joint Managing Director <br /> of C.R.I Group received
          the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
          Kumar Singh, Honorable <br /> Minister of State.
        </p>
      </div>

      <h4>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSET ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </h4>
      <div className='products-section'>
        <img src={Image3} alt='image3' className='img-3' />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <hr />
        <h5>C.R.I FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>
        <h5>
          CHEMICALS & PROCESS<span>|</span>POWER <span>|</span> WATER & WASTE
          WATER <span>|</span> OIL & GAS <span>|</span>PHARMA <span>|</span>
          SUGARS & DISTILLERIES <span>|</span>PAPER & PULP <span>|</span> MARINE
          & DEFENCE METAL & MINING <span>|</span> FOOD & BEVERAGE <span>|</span>
          PETROCHEMICALS & REFINERIES <span>|</span> SOLAR <span>|</span>{" "}
          BUILDING
          <span>|</span> HVAC <span>|</span> FIRE FIGHTING <span>|</span>
          AGRICULTURAL & RESIDENTIAL
        </h5>
      </div>

      <div className='footer-section'>
        <div>
          <IoCallOutline className='footer-icons' />
          <p>Toll free 1800 200 1234</p>
        </div>
        <div>
          <FaFacebook className='footer-icons' />
          <p>www.facebook.com/cripumps</p>
        </div>
        <div>
          <FaGlobe className='footer-icons' />
          <p>www.crigroups.com</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
