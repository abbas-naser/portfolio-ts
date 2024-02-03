import "./SectionGroupButtons.css";
type Props = {
  title: string;
  btns: string[];
  sectionId: string;
  selectedBtnClassName: string;
  componentToShowState: string;
  setComponentToShowState: React.Dispatch<React.SetStateAction<string>>;
};

export default function SectionGroupButtons({
  title,
  btns,
  sectionId,
  selectedBtnClassName,
  componentToShowState,
  setComponentToShowState,
}: Props) {
  return (
    <div className="section-group-btns">
      <h2 className="section-title">{title}</h2>
      {btns.map((btn, index) => {
        return (
          <button
            key={index}
            className={componentToShowState === btn ? selectedBtnClassName : ""}
            onClick={() => {
              const element = document.getElementById(sectionId);
              element!.scrollIntoView({ behavior: "smooth" });
              setComponentToShowState(btn);
            }}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
}
