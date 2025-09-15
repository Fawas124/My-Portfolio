const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Alowoloko Global Company',
      description: 'Alowoloko Global Company Limited: Reliable provider of quality construction materials and real estate services in Nigeria.',
      image: '/project1.png',
      tags: ['React', 'Node.js'],
      liveUrl: 'https://alowoloko-global.vercel.app/',
      // codeUrl: '#'
    },
    {
      id: 2,
      title: 'Temperature Converter',
      description: 'Temperature conversion lets you switch between Fahrenheit and Celsius. Easily convert Fahrenheit to Celsius or Celsius to Fahrenheit for everyday use.',
      image: '/project2.png',
      tags: ['Java'],
      // liveUrl: '#',
      // codeUrl: '#'
    },
    {
      id: 3,
      title: 'Book Store Aplication',
      description: 'Discover, explore, and buy books with personalized recommendations and seamless shopping.',
      image: '/project3.png',
      tags: ['Dart', 'Flutter', 'Books API'],
      // liveUrl: '#',
      // codeUrl: '#'
    },
    {
      id: 4,
      title: 'Number_Guesser',
      description: 'Number_guesser is a web-based game challenging players to guess a secret number within ranges across easy, medium, and hard levels. Hints, a progress bar tracks remaining attempts, scoring rewards accuracy.',
      image: '/project4.png',
      tags: ['Python', 'Flask', 'Postgre Sql', 'MySQL'],
      // liveUrl: '#',
      // codeUrl: '#'
    },
    {
      id: 5,
      title: 'First Fashion E-commerce',
      description: 'The first fashion e-commerce website allowed users to browse clothing online, select styles, purchase securely, and receive deliveries, revolutionizing shopping convenience.',
      image: '/project5.png',
      tags: ['Html', 'CSS', 'JavaScript'],
      liveUrl: 'https://fawas124.github.io/firstfashion/',
      // codeUrl: '#'
    },
    {
      id: 6,
      title: 'Ocean Breeze Hotel',
      description: 'Ocean Breeze Hotel offers relaxing stays with modern amenities, ocean views, fine dining, and warm hospitality, creating memorable experiences for every guest.',
      image: '/project6.png',
      tags: ['Java', 'Html', 'CSS'],
      // liveUrl: '#',
      // codeUrl: '#'
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
                  {/* <a href={project.codeUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    <ion-icon name="code-slash-outline"></ion-icon> Code
                  </a> */}
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