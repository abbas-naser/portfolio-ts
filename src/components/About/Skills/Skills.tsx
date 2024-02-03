import SkillsList from "./SkillsList";

export default function Skills() {
  const toLearn = [
    {
      icon: "clock_loader_10",
      text: "TypeScript",
      learning: true,
      learned: false,
    },
    {
      icon: "circle",
      text: "React Native",
      learning: false,
      learned: false,
    },
    {
      icon: "radio_button_checked",
      text: "React Js",
      learning: false,
      learned: true,
    },
  ];
  const highlightedSkill = [
    {
      icon: "code",
      title: "Programming languages",
      text: "JavaScript, HTML, CSS, Python and Dart.",
    },
    {
      icon: "code_blocks",
      title: "Frameworks and Libraries",
      text: "Express.js, React and Flutter.",
    },
    {
      icon: "database",
      title: "Databases",
      text: "MongoDB, PostgreSQL.",
    },
    {
      icon: "terminal",
      title: "Others",
      text: "Github, Node.js, Mongoose, OAuth - Google Auth, JWT authentication, EJS, Cloudinary and Bootstrap.",
    },
  ];
  const languages = [
    {
      icon: "language",
      text: "Arabic (Native) , English (Intermediate)",
    },
  ];
  return (
    <div className="skills">
      {/* to learn */}
      <SkillsList
        title={`To learn in ${new Date().getFullYear()}`}
        list={toLearn}
      />
      {/* higlighted skills */}
      <SkillsList title="Highlighted Skills" list={highlightedSkill} />
      {/* languages */}
      <SkillsList title="Languages" list={languages} hasHr={false} />
    </div>
  );
}
