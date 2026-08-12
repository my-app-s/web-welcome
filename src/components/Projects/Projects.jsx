import './Projects.css';

const PROJECTS = [
  {
    id: 'go-heart-bot',
    name: 'go-heart-bot',
    githubUrl: 'https://github.com/my-app-s/go-heart-bot',
    stack: ['Go'],
    description: 'A library for simplified creation of Telegram bots in Go. The project is focused on simplicity, reliability, and ease of expansion.',
  },
  {
    id: 'go-custom-router',
    name: 'go-custom-router',
    githubUrl: 'https://github.com/my-app-s/go-custom-router',
    stack: ['Go'],
    description: 'A lightweight, fast, and robust HTTP router for Go applications. The project is focused on simplicity, reliability, and ease of extension.',
  },
  {
    id: 'go-generator',
    name: 'go-generator',
    githubUrl: 'https://github.com/my-app-s/go-generator',
    stack: ['Go', 'HTML'],
    description: 'A simple and fast static page generator written in Go.',
  },
  {
    id: 'portainer-stack',
    name: 'portainer-stack',
    githubUrl: 'https://github.com/my-app-s/portainer-stack',
    stack: ['Docker', 'Docker compose'],
    description: "Production-ready container management setup with Portainer CE and Traefik reverse proxy, featuring automatic routing and SSL certificate management (ACME / Let's Encrypt).",
  },
  {
    id: 'postgresql-stack',
    name: 'postgresql-stack',
    githubUrl: 'https://github.com/my-app-s/postgresql-stack',
    stack: ['Docker', 'Docker compose'],
    description: 'This is a recipe for deploy container postgresql and pgAdmin as tools.',
  },
];

function Projects() {
  return (
    <div className="container container--gap container--padding">
      <h2>Projects</h2>

      {PROJECTS.map((project) => (
        <article key={project.id} className="project">
          <div className="project-left">
            <div className="project-name">
              <h3>{project.name}</h3>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <div>
                <h4>Stack</h4>
                <ul>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="project-right">
            <p className="project-text">{project.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Projects
