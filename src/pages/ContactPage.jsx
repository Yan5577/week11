import { Link } from "react-router-dom";
const ContactPage = () => {
  return (
    <div className="about-bg">
      <div className="about-info">
        <div className="about-text">
          <div className="about-leftside">
            <h1 className="orange-text">Contact</h1>
            
            <p>{" "}
            </p>
            
          </div>
          <div className="about-rightside">
            <div className="about-button">
              <p className="text"> Mobile: 07424502021</p>
              <p className="text">
              Email: zuoyan775@gmail.com
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

export default ContactPage;
