import ewa from "../../../images/ewa.png";
import ListItemWithImg from "../../ListItemWithImg/ListItemWithImg";

export default function Certifications() {
  return (
    <div className="certifications">
      <h2 className="list-title">Electrical Certifications</h2>
      <ListItemWithImg
        img={ewa}
        title="Electrical Installation Engineer License"
        location="Electricity and Water Authority, Bahrain"
        date="Oct 2020"
      />
      <ListItemWithImg
        img={ewa}
        title="Electrical Installation Wireman License"
        location="Electricity and Water Authority, Bahrain"
        date="Jul 2019"
        hasHr={false}
      />
    </div>
  );
}
