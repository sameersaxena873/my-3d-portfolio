import'./About.css'
function About(){
    return(
        <section id="about">
        <h2>ABout Me</h2>
        <p>
            I'm a final-year BCA student at Invertis University, Bareilly, 
        with a strong foundation in Python, SQL, and statistical problem-solving. 
        I'm passionate about turning raw data into meaningful insights and 
        currently seeking a Data Analyst role where I can apply my skills 
        in data analysis, machine learning, and visualization to real-world 
        business problems.
        </p>
        <div className="about-info">
        <div className="info-box">
          <h3>Education</h3>
          <p>BCA, Invertis University (2024–2027)</p>
        </div>
        <div className="info-box">
          <h3>Location</h3>
          <p>Shahjahanpur, Uttar Pradesh</p>
        </div>
      </div>
        </section>
    )
}
export default About