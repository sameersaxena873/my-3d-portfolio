import './work.css'

const projects = [
  {
    title: "Iris Flower Classification",
    description: "Built a Logistic Regression model with EDA and seaborn pairplots, achieving 100% test accuracy across all three species.",
    tech: "Python, scikit-learn, Pandas"
  },
  {
    title: "Car Price Prediction",
    description: "Cleaned a 301-record used-car dataset and built a regression model to predict selling price from multiple features.",
    tech: "Python, Pandas, scikit-learn"
  },
  {
    title: "Selenium Login Automation Testing",
    description: "Built an end-to-end automated test suite validating login flows, dynamic assertions, and error handling.",
    tech: "Python, Selenium WebDriver"
  },
  {
    title: "Sales Data Analysis",
    description: "Cleaned and analyzed retail sales data to identify trends; built pivot tables and charts to visualize revenue patterns.",
    tech: "Python, Pandas, Excel"
  },
  {
    title: "Student Database Management System",
    description: "Designed a relational database with CRUD operations and SQL queries for filtering, joins, and aggregate reporting.",
    tech: "SQL, MySQL"
  }
]

function Work() {
  return (
    <section id="work">
      <h2>Projects</h2>
      <div className="work-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="tech">{project.tech}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work