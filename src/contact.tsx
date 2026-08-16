import './contact.css'

function Contact() {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>
        I'm currently looking for Data Analyst opportunities. 
        Feel free to reach out!
      </p>
      <div className="contact-links">
        <a href="mailto:sameersaxena873@gmail.com">Email</a>
        <a href="https://linkedin.com/in/sameer-saxena-03a691330" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/sameersaxena" target="_blank" rel="noreferrer">GitHub</a>
        <a href="/Sameer_Resume.pdf" download className="resume-btn">
  Download Resume
</a>
      </div>
      <p className="phone">+91 8738068749</p>
    </section>
  )
}

export default Contact