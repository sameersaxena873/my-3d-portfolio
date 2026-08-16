import './Skills.css';

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "C", "C++"],
  },
  {
    title: "Data Analysis",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA", "MS Excel"],
  },
 {
  title: "Machine Learning",
  skills: ["scikit-learn", "Regression", "Feature Engineering", "Model Evaluation", "Generative AI", "LLM Fundamentals"],
},
  {
    title: "Tools & Databases",
    skills: ["MySQL", "Git/GitHub", "Power BI", "Google Colab", "VS Code"],
  },
  {
    title: "Web Development",
    skills: ["React", "TypeScript", "Three.js", "GSAP", "HTML5", "CSS3"],
  },
];

function Skills() {
  return (
    <section id="skills">
      <h2>What I Do</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span className="skill-tag" key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;