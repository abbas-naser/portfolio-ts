import uob from "../../../images/uob.png";
import ga from "../../../images/ga.jpeg";

import ListItemWithImg from "../../ListItemWithImg/ListItemWithImg";
export default function Education() {
  return (
    <div className="education">
      {/* software */}
      <h2 className="list-title">Software Engineering</h2>
      <ListItemWithImg
        img={ga}
        title="Software Engineering Immersive Program"
        location="General Assembly, Bahrain"
        date="Jun - Sep 2023"
      />

      {/* electrical */}
      <h2 className="list-title">Electrical Engineering</h2>
      <ListItemWithImg
        img={uob}
        title="B.Sc. in Electrical Engineering"
        location="University of Bahrain, Bahrain"
        date="Sep 2013 - Mar 2019"
        hasHr={false}
      />
    </div>
  );
}
