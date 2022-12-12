import { Link } from "react-router-dom";
import "./ExperiencePage.css";
const ExperiencePage = () => {
  return (
    <div className="about-bg">
      <div className="about-info">
        <div className="about-text">
          <div className="about-leftside">
            <h1 className="orange-text">Experience</h1>
            
            <p>
              {" "}
            </p>
            
          </div>
          <div className="about-rightside">
            <div className="about-button">
              <p className="orange-text">Completely Care Ltd, Oxford</p>
              <p className="text">
              <p >Nov 2021 — Nursery Assistant</p>
  <p>  Maintaining safety and ensuring the welfare of all enrolled children, supervising children during all activities, indoors and outdoors.</p>
  <p>Maintaining a harmonious and efficient work environment.</p>
              </p>
              <p className="orange-text">Footsteps Child Care, San Francisco</p>
              <p className="text">
              <p>Jun 2017 - Mar 2018 — Teaching Assistant</p>
                <p> Regularly supervised out-of-school activities</p>
                <p> Participated in planning program curriculum</p>
              </p>
              <p className="orange-text">China Telecom, Beijing</p>
              <p className="text">
                <p>Jun 2015 - Jun 2016 — Marketing Manager</p>
                <p>Organise channel expansion of clients </p>
                <p>Maintain daily contact with clients</p>
                <p>Update and improve the client database</p>
              </p>
              <Link to="/">
                <button className="about-btn refresh-btn">
                  back
                </button>
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ExperiencePage;
