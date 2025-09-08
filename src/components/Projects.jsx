const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, and payment integration.',
      image: '/project1.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks with drag-and-drop functionality and team collaboration.',
      image: '/project2.jpg',
      tags: ['Vue.js', 'Firebase', 'CSS3'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with forecast data, location detection, and interactive maps.',
      image: '/project3.jpg',
      tags: ['JavaScript', 'API Integration', 'Bootstrap'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Dashboard for tracking social media metrics and generating reports with data visualization.',
      image: '/project4.jpg',
      tags: ['React', 'D3.js', 'Express', 'MySQL'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 5,
      title: 'Inventory Management System',
      description: 'Enterprise solution for tracking inventory, orders, and suppliers with role-based access control.',
      image: '/project5.jpg',
      tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      description: 'Mobile application for tracking workouts, nutrition, and progress with personalized recommendations.',
      image: '/project6.jpg',
      tags: ['React Native', 'Firebase', 'Redux'],
      liveUrl: '#',
      codeUrl: '#'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span className="tag" key={index}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    <ion-icon name="globe-outline"></ion-icon> Live Demo
                  </a>
                  <a href={project.codeUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    <ion-icon name="code-slash-outline"></ion-icon> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;