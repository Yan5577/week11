import "./AboutPage.css";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about-bg">
      <div className="about-info">
        <div className="about-text">
          <div className="about-leftside">
            <h2>Hello,</h2>
            <h2>Nice to </h2>
            <h2>
              meet<strong>You</strong>
            </h2>
            <p>
              With almost <strong>10 years of working experience,</strong>
              I spent most of my time as a Marketing Manager
              for different companies in China. My responsibilities included coordinating meetings and project deadlines and maintaining client relationships.
              I am a passionate person who pays attention to detail and considers myself adaptable to most challenging situations. I enjoy working in a
              team environment and using my initiative. In my previous experience, I worked well under pressure and could adhere to strict deadlines.
              I really enjoy interacting with people, with clients or with other professionals. Also, I love going for walks on the weekends to clear my mind and appreciate nature.
            </p>
            <p>Mobile: 07424502021</p> 
            <p>
              Email: zuoyan775@gmail.com
            </p>
          </div>
          
             <Link to="/">
                <button className="about-btn refresh-btn">
                  back
                </button>
              </Link>
        </div>
        
      </div>
    </div>
  );
};

export default AboutPage;
