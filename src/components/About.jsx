const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <h3>
              A dedicated developer based in London, United Kingdom, A software
              engineer transitioning into business analysis
            </h3>
            <p>
              I'm a software engineer and Business Computing & Data Analytics
              student at Middlesex University, with a growing focus on business
              analysis, data, and technology-driven problem solving.
            </p>
            <p>
              My background in full-stack development, Java, databases, and
              software engineering gives me a strong technical foundation. I'm
              now building on that experience by developing my skills in
              requirements analysis, data analysis, business processes, and
              translating business needs into practical technology solutions.
            </p>
            <p>
              I enjoy understanding how technology can solve real business
              problems, analysing data to support better decisions, and working
              at the intersection of people, business, and technology. My goal
              is to combine my technical background with business and analytical
              thinking to create solutions that deliver meaningful value.
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
