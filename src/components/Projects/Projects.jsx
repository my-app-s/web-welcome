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
    <section className="mx-auto max-w-2xl p-3 flex flex-col gap-6">
      <h2 className="text-xl font-bold">Projects</h2>

      <div className="flex flex-col gap-4">
        {PROJECTS.map((project) => (
          <article 
            key={project.id} 
            className="flex flex-col sm:flex-row bg-custom-bg border border-neutral-300 rounded-lg overflow-hidden"
          >
            <div className="p-4 flex flex-col justify-between flex-1 gap-4 border-b sm:border-b-0 sm:border-r border-neutral-300">
              <div>
                <h3 className="text-custom-project-name font-semibold text-lg">{project.name}</h3>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline inline-block mt-1"
                >
                  GitHub &rarr;
                </a>
              </div>

              <div>
                <h4 className="text-xs font-medium uppercase tracking-wider text-neutral-500 mb-2">Stack</h4>
                <ul className="flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <li 
                      key={item}
                      className="text-xs bg-blue-400 px-2 py-1 rounded-md text-custom-github-text"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 flex-1 bg-custom-left flex items-center">
              <p className="text-custom-project-text text-sm leading-relaxed break-words w-full">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;