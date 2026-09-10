import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('https://api.github.com/users/my-app-s/repos?sort=updated&per_page=100');
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();

        // Список названий репозиториев (поле name из GitHub API), которые нужно скрыть
        const excludedRepos = ["my-app-s"];

        // Объединяем фильтрацию форков и скрытых репозиториев в один подход
        const filteredData = data.filter(
          (repo) => !repo.fork && !excludedRepos.includes(repo.name)
        );
        
        // Map GitHub API response fields to match your UI expectations if necessary, 
        // or ensure your API data supplies 'description', 'html_url', etc.
        const formattedProjects = filteredData.map((repo) => ({
          id: repo.id,
          name: repo.name,
          githubUrl: repo.html_url,
          description: repo.description || "No description provided.",
          stack: repo.language ? [repo.language] : [] // GitHub API returns a single primary language per repo
        }));

        setProjects(formattedProjects);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return <div className="text-center p-6 text-neutral-500">Loading projects...</div>;
  }

  if (error) {
    return <div className="text-center p-6 text-red-500">Error: {error}</div>;
  }

  return (
    <section className="mx-auto max-w-2xl p-3 flex flex-col gap-6">
      <h2 className="text-xl font-bold">Projects</h2>

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
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