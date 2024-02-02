import "./SectionGroupButtons.css";
type Props = {
  title: string;
  btns: string[];
  selectedBtnClassName: string;
  componentToShowState: string;
  setComponentToShowState: React.Dispatch<React.SetStateAction<string>>;
};

export default function SectionGroupButtons({
  title,
  btns,
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
