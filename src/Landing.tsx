import './Landing.css'
import Background3D from './Background3D'

function Landing() {
  return (
    <section id="landing">
      <Background3D />
      <div className="landing-content">
        <h1>Sameer Saxena</h1>
        <h2>Aspiring Data Analyst | BCA Student</h2>
        <p>
          Final-year BCA student passionate about Python, SQL, 
          and turning data into real-world insights.
        </p>
        <a href="#contact" className="btn">Get In Touch</a>
      </div>
    </section>
  )
}

export default Landing