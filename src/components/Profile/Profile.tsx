import "./Profile.css";
import profileImage from "../../images/profile.png";

export default function Profile(): React.JSX.Element {
  return (
    <div className="profile-outer-container">
      <div className="profile-container">
        {/* profile image */}
        {/* <div className="profile-image-container">
          <img src={profileImage} alt="profile" />
        </div> */}
        {/* porfile detials */}
        <div className="profile-details">
          <p className="profile-name">Abbas Abdulla Naser</p>
          <p className="profile-barnd-statement">
            "Software Engineer with Electrical Engineering background. An avid
            learner motivated by solving problems, developing responsive full
            stack web applications"
          </p>
          {/* porfile contact */}
          <div className="profile-contact">
            {" "}
            <p>Email: abbass.abdulla.naser@gmail.com</p>
            <p>
              Linkedin:{" "}
              <a
                href="http://www.linkedin.com/in/abbas-naser"
                target="_blank"
                rel="noreferrer"
              >
                abbas-naser
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
