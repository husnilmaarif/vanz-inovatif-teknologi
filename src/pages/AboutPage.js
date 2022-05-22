import React from "react";
import profile from "../assets/profile.png";

function AboutPage() {
  return (
    <>
      <div className="row">
          <div className="col-md-5 bg-primary text-light text-center">
            About Page
          </div>
        </div>

      <div className="container mt-4 p-5 border border-dark m-5">
        <div className="row">
          <div className="col-md-4 text-center">
            <img src={profile} alt="profile" className="w-100 mb-3" />
            <h4>Husnil Maarif</h4>
            <h6>
              <i>ReactJs Developer</i>
            </h6>
          </div>
          <div className="col-md-8 p-5">
            <div className="row">
              <h4>About Me</h4>
              <p>
                I am a javascript developer, who enjoys writing javascript code.
                The first time i got know coding was in may 2021, exactly a year
                ago. At first i was self-taught, then in december 2021, i
                attended a fullstack bootcamp at eduwork.id and took an M.E.R.N.
                technology class
              </p>
            </div>
            <div className="row">
              <h4>Github</h4>
              <a href="https://github.com/husnilmaarif">
                https://github.com/husnilmaarif
              </a>
              <br />
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/husnil-maarif-481312228">
                https://www.linkedin.com/in/husnil-maarif-481312228
              </a>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="row">
          <div className="col-md-4">
            <div className="p-2">
              <h4>Education</h4>
              <h6>SMA-IT Al-Ishlah Maros (2015 - 2018)</h6>
              <p>Biology - Science</p>
              <h6>Eduwork.id bootcamp (Des 2021 - Mei 2022)</h6>
              <p>Fullstack - M.E.R.N.</p>
            </div>
            <div className="p-2">
              <h4>Skills</h4>
              <h6>Hard Skill</h6>
              <ul>
                <li>Git & Github</li>
                <li>Html & Css</li>
                <li>Bootstrap</li>
                <li>ReactJs</li>
                <li>Redux</li>
                <li>Nodejs</li>
                <li>Expressjs</li>
                <li>Mongodb</li>
              </ul>
              <h6>Soft Skill</h6>
              <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
            </div>
          </div>
          <div className="col-md-8"></div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
