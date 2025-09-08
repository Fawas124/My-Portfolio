const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>A dedicated developer based in Lagos, Nigeria</h3>
            <p>
              I'm a passionate software engineer with expertise in Java development, 
              full-stack web applications, and database management. With a strong 
              foundation in computer science principles, I create efficient, scalable, 
              and user-friendly solutions.
            </p>
            <p>
              My journey in software development began several years ago, and since then 
              I've worked on various projects ranging from enterprise applications to 
              responsive web designs. I'm constantly learning new technologies and 
              methodologies to stay at the forefront of the industry.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing my knowledge through 
              tech communities.
            </p>
          </div>
          
          <div className="about-image">
            <img src="/fawass.png" alt="Fawas" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;