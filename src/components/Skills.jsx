import { useEffect, useRef } from 'react';

const Skills = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBar = entry.target.querySelector('.skill-progress');
            const width = skillBar.getAttribute('data-width');
            skillBar.style.width = width;
            
            // Add a small delay between each animation for better visual effect
            const index = Array.from(skillRefs.current).indexOf(entry.target);
            skillBar.style.transitionDelay = `${index * 0.1}s`;
          }
        });
      },
      { threshold: 0.3 } // Reduced threshold to trigger earlier
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const skillsData = {
    frontend: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Bootstrap', level: 85 }
    ],
    backend: [
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 70 },
      { name: 'PHP', level: 50 }
    ],
    database: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Oracle', level: 60 },
    ]
  };

  // Flatten all skills to create refs for each individual skill item
  const allSkills = [
    ...skillsData.frontend,
    ...skillsData.backend,
    ...skillsData.database
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend Development</h3>
            <ul className="skill-list">
              {skillsData.frontend.map((skill, index) => (
                <li 
                  className="skill-item" 
                  key={index}
                  ref={el => skillRefs.current[index] = el}
                >
                  <div className="skill-name">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      data-width={`${skill.level}%`}
                      style={{width: '0%'}}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Backend Development</h3>
            <ul className="skill-list">
              {skillsData.backend.map((skill, index) => {
                const frontendLength = skillsData.frontend.length;
                return (
                  <li 
                    className="skill-item" 
                    key={index}
                    ref={el => skillRefs.current[frontendLength + index] = el}
                  >
                    <div className="skill-name">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        data-width={`${skill.level}%`}
                        style={{width: '0%'}}
                      ></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Database Management</h3>
            <ul className="skill-list">
              {skillsData.database.map((skill, index) => {
                const frontendLength = skillsData.frontend.length;
                const backendLength = skillsData.backend.length;
                return (
                  <li 
                    className="skill-item" 
                    key={index}
                    ref={el => skillRefs.current[frontendLength + backendLength + index] = el}
                  >
                    <div className="skill-name">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        data-width={`${skill.level}%`}
                        style={{width: '0%'}}
                      ></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;