import { Link } from "react-router-dom";

const EducationPage = () => {
  return (
    <div className="about-bg">
      <div className="about-info">
        <div className="about-text">
          <div className="about-leftside">
            <h1 className="orange-text">Education</h1>
            
            <p>

            {" "}
            
            </p>
            
          </div>
          <div className="about-rightside">
            <div className="about-button">
              <p className="orange-text">Canada College, USA</p>
              <p className="text">
              Jan 2017—Apr 2018
              Early Childhood Education
              </p>
              <p className="orange-text">Beijing University of Posts and Telecommunications, China</p>
              <p className="text">
              Mar 2012—July 2014
              Marketing
              </p>
              <p className="orange-text">Certificate</p>
              <p className="text">
              <p>Level2 Understanding Data Protection and Data Security</p>
              <p>Level2 Introducing Caring For Children and Young People</p>
              <p>12-week Master Software Development Skills Bootcamp  </p>       
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

export default EducationPage;
