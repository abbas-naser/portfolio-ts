import skd from "../../../images/skd.png";
import aqua from "../../../images/aqua.png";
import ListItemWithImg from "../../ListItemWithImg/ListItemWithImg";

export default function Experience() {
  const electricalExp = [
    {
      img: skd,
      title: "Electrical Engineer",
      location: "SKD Group, Bahrain",
      date: "Oct - Dec 2022",
      tasks: [
        "Overseeing the installation of electrical systems to ensure that they meet the standards",
        "Talking to customers to get their requirements and adjustments on the project",
        "Calculating the appropriate sizes for cables, wires and other electrical equipment",
      ],
    },
    {
      img: aqua,
      title: "Electrical Engineer",
      location: "Aqua Technology Transfer, Bahrain",
      date: "Oct 2020 - Sep 2022",
      tasks: [
        "Testing of electrical motors",
        "Troubleshooting electrical problems",
        "Logging defective machines issues and keeping track of the fixing process stages",
      ],
    },
  ];

  return (
    <div className="experiense">
      <h2 className="list-title">Electrical Experience</h2>
      {electricalExp.map((item, index) => {
        return (
          <ListItemWithImg
            key={index}
            img={item.img}
            title={item.title}
            location={item.location}
            date={item.date}
            list={item.tasks}
            hasHr={index === electricalExp.length - 1 ? false : true}
          />
        );
      })}
    </div>
  );
}
