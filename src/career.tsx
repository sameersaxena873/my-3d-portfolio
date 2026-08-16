import './Career.css'

const timeline = [
  {
    year: "2026 – Present",
    title: "Machine Learning Intern",
    place: "CodeAlpha (Remote)"
  },
  {
    year: "2024 – 2027",
    title: "BCA (Bachelor of Computer Applications)",
    place: "Invertis University, Bareilly"
  },
  {
    year: "2021",
    title: "Senior Secondary (12th)",
    place: "Dr. G.L. Kanojia Public School"
  },
  {
    year: "2019",
    title: "Higher Secondary (10th)",
    place: "Dr. G.L. Kanojia Public School"
  }
]

function Career() {
  return (
    <section id="career">
      <h2>Career Timeline</h2>
      <div className="timeline">
        {timeline.map((item, index) => (
          <div className="timeline-item" key={index}>
            <span className="year">{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.place}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Career