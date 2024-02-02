import "./SkillsList.css";
import SkillsListItem from "./SkillsListItem";
type Props = {
  title: string;
  hasHr?: boolean;
  list: {
    icon: string;
    title?: string;
    text: string;
    learning?: boolean;
    learned?: boolean;
  }[];
};
export default function SkillsList({ title, hasHr = true, list }: Props) {
  return (
    <div className="skills-list">
      <h2 className="list-title">{title}</h2>
      {list.map((item, index) => {
        return (
          <SkillsListItem
            key={index}
            icon={item.icon}
            title={item.title}
            text={item.text}
            learned={item.learned}
            learning={item.learning}
          />
        );
      })}

      {hasHr && <hr />}
    </div>
  );
}
